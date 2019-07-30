const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');


router.put('/', function (req, res) {
	if (req.body.username && req.body.password && req.body.email && typeof req.body.isAdmin === 'boolean') {
		bcrypt.hash(req.body.password, 10).then(hash => {
			let newUser = new User({
				username: req.body.username,
				password: hash,
				isAdmin: req.body.isAdmin,
				email: req.body.email
			});
			newUser.save().then(() => {
				res.status(201);
				res.end();
				newUser.setAvatar().then(() => {
					logger.debug('Avatar generated');
				}).catch(err => {
					logger.error(err.message);
				});
			}).catch(err => {
				res.status(400);
				res.json({message: err.message});
			});
		}).catch(err => {
			logger.error(err.message);
			res.status(500);
			res.end();
		});
	} else {
		res.status(400);
		res.end();
	}
});

router.get('/', function (req, res) {
	if (typeof parseInt(req.query.limit) === 'number' && typeof parseInt(req.query.page) === 'number') {
		let limit = parseInt(req.query.limit);
		let page = parseInt(req.query.page);
		User.find({}, {username: 1, isAdmin: 1, email: 1}, {limit: limit, skip: (limit * (page - 1))}).then(users => {
			User.estimatedDocumentCount().then(count => {
				res.status(200);
				res.json({total: count, page: users});
			}).catch(err => {
				res.status(500);
				res.json({message: err.message});
				logger.error(err.message);
			});
		}).catch(err => {
			res.status(500);
			res.json({message: err.message});
			logger.error(err.message);
		});
	} else {
		res.status(400);
		res.end();
	}
});

router.delete('/:userId', function (req, res) {
	if(req.user.isAdmin) {
		User.deleteOne({_id: req.params.userId}).then(() => {
			res.status(200);
			res.end();
		}).catch(err => {
			res.status(400);
			res.json({message: err.message});
		});
	} else {
		res.status(403);
		res.end();
	}
});

router.patch('/:userId', function (req, res) {
	if(req.user.isAdmin || req.user._id === req.params.userId) {
		let update = req.body;
		if(update._id) {
			delete update._id;
		}
		User.findByIdAndUpdate(req.params.userId, update).then(() => {
			res.status(200);
			res.end();
		}).catch(err => {
			res.status(400);
			res.json({message: err.message});
		});
	} else {
		res.status(403);
		res.end();
	}
});

router.get('/:userId/avatar', async function (req, res) {
	try {
		let downloadStream = await User.downloadAvatarByUserId(req.params.userId);
		downloadStream.on('file', file => {
			res.type(file.contentType || 'image/png');
		});
		downloadStream.on('data', chunk => {
			res.write(chunk);
		});
		downloadStream.on('end', () => {
			res.end();
		});
	} catch (err) {
		if(err.name === 'CastError') {
			res.status(404);
			res.end();
		} else {
			res.status(500);
			res.end();
		}
	}
});

module.exports = router;