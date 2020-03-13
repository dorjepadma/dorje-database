const Schema = require('./Schema');
const Model = require('./Model');
const Cat = new Model('Cat', schema);

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

describe('Model class', () => {
  it('creates a new document', () => {

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