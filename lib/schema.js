const schema = {}
const validators = Object.entries(schema)
    .map(([field, configuration]) => new Validator(field, configuration));