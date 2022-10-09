const Ajv = require("ajv");
const req = require("express/lib/request");
const ajv = new Ajv.default({ allErrors: true });

require("ajv-formats")(ajv);
require("ajv-keywords")(ajv);
require("ajv-errors")(ajv);

const schema = {
    type: 'object',
    properties: {
        column: {
            type: 'string',
            enum: ['To Do', 'In Progress', 'Completed'],
            errorMessage: 'Please do not change the column type'
        },

        name: {
            type: 'string',
            minLength: 1,
            maxLength: 20,
            transform: ['trim'],
            errorMessage: {
                minLength: "Name should have at least 1 character",
                maxLength: "Name is too long"
            }
        },

        priority: {
            type: 'string',
            enum: ['low', 'medium', 'high', 'urgent'],
            errorMessage: 'Please do not change the priority'
        },

        description: {
            type: 'string',
            transform: ['trim'],
            minLength: 1,
            maxLength: 200,
            errorMessage: "Please enter a description"
        }
    },
    required: ['column', 'name', 'priority', 'description'],
    additionalProperties: true,
    errorMessage: {
        required: {
            'column': 'Please do not change the column type',
            'name': 'Please name your task',
            'priority': 'Please choose a priority',
            'description': 'Please enter a description'
        }
    }

};

const taskFormValidator = (req, res, next) => {
    const validate = ajv.compile(schema);
    validate(req.body);

    if (validate.errors != null) {
        res.status(400).json({errors: validate.errors});
        return;
    }
    next();
};

exports.taskFormValidator = taskFormValidator;