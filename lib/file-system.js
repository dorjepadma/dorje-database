const fs = require('fs').promises;
//promises so we do not have to have err.

// fs.mkdir('./dewachen/amitabha/lotus/here', { recursive: true } 
//recursive here is referring how fs.mkdir is used to create files within files
// recursive also refers to a function that calls on itself
const mkdirp = path => {
    return fs.mkdir(path, { recursive: true });
};
//when we write a file we need to write it to a string.
const writeJSON = (path, obj) => {
    return fs.writeFile(path, JSON.stringify(obj))
        .then(() => obj);
};

const readJSON = path => {
    return fs.readFile(path)
        .then(contents => JSON.parse(contents));
};

const readDirectoryJSON = path => {
    return fs.readdir(path)
        .then(files => {
            return Promise.all(files.map(file => readJSON(`${path}/${file}`)));
        });
};
const updateJSON = (path, obj) => {
    return readJSON(path)
        .then(json => {
            const updatedJSON = { ...json, ...obj };
            return writeJSON(path, updatedJSON);
        });
};
  
const deleteFile = path => fs.unlink(path);
// function writeJSON(path, obj) {
//   return fs.writeFile(path, JSON.stringify(obj));

// function readJSON(path, obj) {
//     return fs.readFile(path, JSON.parste(obj));
module.exports = {
    mkdirp,
    writeJSON,
    readJSON,
    readDirectoryJSON,
    updateJSON,
    deleteFile
};