const Schema = require('../lib/Schema');
const Model = require('../lib/model');


describe('Model class', () => {
    it('creates a new document', () => {
        const schema = new Schema({
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number, 
                required: true
            },
            weight: {
                type: String
            }
        });
        
        const Cat = new Model('Cat', schema);

        return Cat
            .create({
                name: 'trixie',
                age: 5,
                weight: '11 lbs'
            })
            .then(cat => {
                expect(cat).toEqual({
                    _id: expect.any(String),
                    name: 'trixie',
                    age: 5,
                    weight: '11 lbs'
                });
            });
    });
});