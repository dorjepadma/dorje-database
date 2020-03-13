const path = require('path');
const uuid = require('uuid/v4');
const {
    mkdirp,
    // writeJSON,
    // readDirectoryJSON,
    // readJSON,
    // updateJSON,
    // deleteFile
} = require('./file-system');

module.exports = class Model {
    consturctor(modelName, schema) {
        this.modelName = modelName;
        this.schema = schema;
        mkdirp(this.modelName);
    }
};