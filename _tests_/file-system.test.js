const fs = require('fs').promises;
const { 
    mkdirp,
    writeJSON,
    readJSON,
    readDirectoryJSON
   
} = require('../lib/file-system');

jest.mock('fs', () => ({
    promises: {
        mkdir: jest.fn(() => Promise.resolve()),
        writeFile: jest.fn(() => Promise.resolve()),
        readFile: jest.fn(() => Promise.resolve('{"name":"trixie"}')),
        readdir: jest.fn(() => Promise.resolve(['test.json', 'test2.json'])),
    }
}));

describe ('files system functions', () => {
    it('makes a directory and all parent directories', () => {
        return mkdirp('./dewachen/amitabha/lotus/here')
            .then(() => {
                expect(fs.mkdir)
                    .toHaveBeenCalledWith('./dewachen/amitabha/lotus/here', { recursive: true });
            });
    });

    it('writes an object to a file', () => {
        const cat = {
            name: 'trixie',
            age: 5,
            weight: '11 lbs'
        };

        return writeJSON('./test.json', cat)
            .then(() => {
        // check that write file is called with the correct arguments
        // './test.json', and JSON.stringify(cat)
                expect(fs.writeFile)
                    .toHaveBeenCalledWith('./test.json', JSON.stringify(cat));
        // read the file
        // make sure the file has the right stuff in it
            });
    });
    it('can read an object from a file', () => {
        return readJSON('./test.json')
            .then(data => {
                expect(fs.readFile)
                    .toHaveBeenCalledWith('./test.json');
                expect(data).toEqual({
                    name:'trixie'
                });
            });
    });

    it('reads a directory of json', () => {
        return readDirectoryJSON('./data')
            .then(data => {
                expect(fs.readdir)
                    .toHaveBeenCalledWith('./data');
                expect(fs.readFile)
                    .toHaveBeenCalledWith('./data/test.json');
                expect(fs.readFile)
                    .toHaveBeenCalledWith('./data/test2.json');
                expect(data).toEqual([
                    { name: 'trixie' },
                    { name: 'trixie' }
                ]);
            });
    });
});
