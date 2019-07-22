const newProject = {
	type: "object",
	properties: {
		name: {
			type: "string",
			required: true
		},
		roles: {
			type: "array",
			minLength: 1,
			required: true,
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
						type: "array"
					}
				}
			}
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
					isStarting: {
						type: "boolean",
						required: true
					},
					isClosing: {
						type: "boolean",
						required: true
					}
				}
			}
		},
		description: {
			type: "string"
		}
	}
};

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
				type: "array"
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

module.exports = {newProject, roles};