const { Validator } = require('./Validator');
// const schema = {
//     name: {
//         name: {
//             type: String,
//             required: true
//         },
//         age: {
//             type: Number,
//             required: true
//         },
//         weight: {
//             type: String
//         }
//         }};
        
module.exports = class Schema {
    constructor(schema) {
        this.schema = schema;
        this.validatorArray = Object.entries(schema)
            .map(([field, configuration]) => new Validator(field, configuration));
    }

    validate(cat) {
        const validated = {}; 
        const errors = [];
        this.validators
            .forEach(validator => {
                try {
                    validated[validator.field] = validator.validate(cat);
                } catch (e) {
                    errors.push(e);
                }
            });

        if (errors.length > 0) {
            throw new Error(`invalid Schema >> ${errors}`);
        }
        return validated;
    }
};
    
