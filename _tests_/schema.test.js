const Schema = require('../lib/Schema.js');

describe('Schema', () => {
    it ('validates a good....no great Schema!', () => {
        const schema = new Schema({
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number
            },
            weight: {
                type: String
            }
        });

        const dog = {
            name: 'cat',
            age: 5,
            weight: '11 lbs'
        };

        expect(schema.validate(dog)).toEqual({
            name: 'cat',
            age: 5,
            weight: '11 lbs'
        });
    });

    it('throws on a bad schema', () => {
        const schema = new Schema({
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number
            },
            weight: {
                type: String
            }
        });

        const cat = {
            age: 'hi',
            weight: '8 lbs'
        };

        expect(() => schema.validate(cat)).toThrowErrorMatchingSnapshot();
    });
});