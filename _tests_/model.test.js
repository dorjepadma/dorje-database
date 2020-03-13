const Schema = require('../lib/Schema');
const Model = require('../lib/Model');


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
    it('finds by id and updates', () => {
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
  
        const cat = new Model('cat', schema);
  
        return cat
            .create({
                name: 'trixie',
                age: 5,
                weight: '11 lbs'
            })
            .then(cat => {
                return cat 
                    .findByIdAndUpdate(cat._id, { name: 'lotus' });
            })
            .then(updatedCat => {
                expect(updatedCat).toEqual({
                    _id: expect.any(String),
                    name: 'lotus',
                    age: 5,
                    weight: '12 lbs'
                });
            });
    });
    it('finds by id', () => {
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
                return Cat
                    .findById(cat._id);
            })
            .then(foundCat => {
                expect(foundCat).toEqual({
                    _id: expect.any(String),
                    name: 'trixie',
                    age: 5,
                    weight: '11 lbs'
                });
            });
    });
    it('deletes by id', () => {
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
                return Cat
                    .findByIdAndDelete(cat._id);
            })
            .then(deletedCat => {
                expect(deletedCat).toEqual({
                    _id: expect.any(String),
                    name: 'trixie',
                    age: 5,
                    weight: '11 lbs'
                });
            });
    });
    it('finds', () => {
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
            }, {
                name: 'Lotus',
                age: 5,
                weight: '12 lbs'
            })
            .then(() => {
                return Cat
                    .find();
            })
            .then(foundCats => {
                expect(foundCats).toContainEqual({
                    _id: expect.any(String),
                    name: 'trixie',
                    age: 5,
                    weight: '11 lbs'
                }, {
                    name: 'Lotus',
                    age: 5,
                    weight: '12 lbs'
                });
            });
    });
});