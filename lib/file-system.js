const fs = require('fs').promises;

const mkdirp = path => fs.mkdir(path, { recursive: true });

const writeJSON = (path, obj) => fs.writeFile(path, JSON.stringify(obj))
    .then(() => obj);

const readJSON = path => fs.readFile(path, 'utf-8')
    .then(content => JSON.parse(content));

const readDirectoryJSON = path => fs.readdir(path)
    .then(files => Promise.all(files.map(file => readJSON(`${path}/${file}`))));

const updateJSON = (path, obj) => readJSON(path)
    .then(oldObj => ({ ...oldObj, ...obj }))
    .then(newObj => writeJSON(path, newObj));

const deleteFile = async(path) => {
    const json = await readJSON(path);
    await fs.unlink(path);
    return json;
};

module.exports = {
    mkdirp,
    writeJSON,
    readJSON,
    readDirectoryJSON,
    updateJSON,
    deleteFile
};