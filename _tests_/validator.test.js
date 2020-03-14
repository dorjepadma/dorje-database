const Validator = require('../lib/Validator');

describe('Validator', () => {
    let nameValidator;

    beforeEach(() => {
        nameValidator = new Validator('name', {
            type: String,
            required: true
        });
    });
    it('has a field and configuration property', () => {
        expect(nameValidator.field).toEqual('name');
        expect(nameValidator.configuration).toEqual({
            type: String,
            required: true
        });
    });
    it('can validate an object with the property type', () => {
        const cat = {
            name: 'trixie',
            age: 3,
            weight: '12 lbs'
        };

        expect(nameValidator.validate(cat)).toEqual('trixie');
    });
    it('can validate an object with the wrong type but castable', () => {
        const cat = {
            name: 9876,
            age: 5,
            weight: '12 lbs'
        };
        expect(nameValidator.validate(cat)).toEqual('9876');
    });

    it('throws an error if it validates an object with the wrong type and not castable', () => {
        const cat = {
            name: {},
            age: 3,
            weight: '200 lbs'
        };

        expect(() => nameValidator.validate(cat)).toThrowError('Cannot cast >>[object Object]<< to String');
    });

    it('throws an error when validating an object with a missing field', () => {
        const cat = {
            age: 4,
            weight: '8 lbs'
        };
        expect(() => nameValidator.validate(cat)).toThrowError('Missing required field >>name<<');
    });
});
  
