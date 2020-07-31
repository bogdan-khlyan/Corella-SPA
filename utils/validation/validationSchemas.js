const newProject = {
	type: "object",
	properties: {
		name: {
			type: "string",
			required: true
		},
		columns: {
			type: "array",
			minLength: 2,
			required: true,
			items: {
				type: "object",
				properties: {
					name: {
						type: "string",
						required: true
					},
					limit: {
						type: "integer",
						minimum: 0
					}
				}
			}
		},
		description: {
			type: "string"
		},
		roles: {
			type: "array",
			minLength: 1,
			items: {
				type: "object",
				properties: {
					name: {
						type: "string",
						required: true
					},
					isManager: {
						type: "boolean",
						required: true
					},
					isCreator: {
						type: "boolean",
						required: true
					},
					isDestroyer: {
						type: "boolean",
						required: true
					},
					isEditor: {
						type: "boolean",
						required: true
					},
					issueTransitionMatrix: {
						type: "object"
					}
				}
			}
		}
	}
};

// const role = {
// 	type: "object",
// 	properties: {
// 		name: {
// 			type: "string",
// 			required: true
// 		},
// 			isManager: {
// 			type: "boolean",
// 			required: true
// 		},
// 		isCreator: {
// 			type: "boolean",
// 			required: true
// 		},
// 		isDestroyer: {
// 			type: "boolean",
// 			required: true
// 		},
// 		isEditor: {
// 			type: "boolean",
// 			required: true
// 		},
// 		issueTransitionMatrix: {
// 			type: "array",
// 			items: {
// 				type: "object"
// 			}
// 		},
// 		members: {
// 			type: "array",
// 			items: {
// 				type: "string",
// 				format: "objectId"
// 			}
// 		}
// 	}
// };

const roles = {
	type: "array",
	items: {
		type: "object",
		properties: {
			name: {
				type: "string",
				required: true
			},
			isManager: {
				type: "boolean",
				required: true
			},
			isCreator: {
				type: "boolean",
				required: true
			},
			isDestroyer: {
				type: "boolean",
				required: true
			},
			isEditor: {
				type: "boolean",
				required: true
			},
			issueTransitionMatrix: {
				type: "object"
			},
			members: {
				type: "array",
				items: {
					type: "string",
					format: "objectId"
				}
			}
		}
	}
};

const newIssue = {
	type: "object",
	properties: {
		title: {
			type: "string",
			required: true
		},
		description: {
			type: "string"
		},
		checklist: {
			type: "array",
			items: {
				type: "object",
				properties: {
					description: {
						type: "string",
						required: true
					},
					isDone: {
						type: "boolean",
						required: true
					}
				}
			}
		}
	}
};

const moveOperation = {
	type: 'object',
	properties: {
		issueId: {
			type: "string",
			format: "objectId",
			required: true
		},
		originalPosition: {
			type: "integer",
			minimum: 0
		},
		targetColumn: {
			type: "string",
			format: "md5",
			required: true
		},
		targetPosition: {
			type: "integer",
			minimum: 0,
			required: true
		}
	}
};

const updateUser = {
	type: 'object',
	properties: {
		username: {
			type: "string",
			minLength: 3,
			maxLength: 50
		},
		email: {
			type: "string",
			minLength: 3,
			maxLength: 50
		},
		password: {
			type: "string",
			minLength: 3,
			maxLength: 50
		},
		isAdmin: {
			type: "boolean"
		}
	}
};

const newUser = Object.assign({}, updateUser);
newUser.required = ['username', 'password', 'email', 'isAdmin'];

const newHotfix = {
	type: "object",
	properties: {
		title: {
			type: "string",
			required: true
		},
		description: {
			type: "string"
		},
		priority: {
			type: "integer",
			minimum: 1,
			maximum: 4,
			required: true
		}
	}
};

let getHotfixesQuery = {
	type: 'object',
	properties: {
		limit: {
			type: 'integer',
			minimum: 1,
			maximum: 10000
		},
		page: {
			type: 'integer',
			minimum: 1,
			maximum: 10000
		},
		showCompleted: {
			type: 'boolean'
		}
		// sortByPriority: {
		// 	type: 'string',
		// 	enum: ['ASC', 'DESC']
		// },
		// sortByState: {
		// 	type: 'string',
		// 	enum: ['ASC', 'DESC']
		// },
		// sortByCreation: {
		// 	type: 'string',
		// 	enum: ['ASC', 'DESC']
		// }
	}
}

module.exports = {newProject, roles, newIssue, moveOperation, updateUser, newUser, newHotfix, getHotfixesQuery};