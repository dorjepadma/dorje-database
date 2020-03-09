const {
    isNumber,
    isString,
    isBoolean,
    isArray,
    isObject,
    isFunction,
    castToNumber,
    castToString,
    // getCaster
} = require('../lib/types.js');
  
describe('basic validation', () => {
    it('properly tells if a value is a numbers', () => {
        expect(isNumber(3)).toBeTruthy();
        expect(isNumber('Be Happy')).toBeFalsy();    
    });
});
describe('is a string', () => {
    it('properly tells if a value is a string', () => {
        expect(isString(3)).toBeFalsy();
        expect(isString('hi')).toBeTruthy();
    });
});
describe('is a boolean', () => {
    it('properly tells if a value is a boolean', () => {
        expect(isBoolean(3)).toBeFalsy();
        expect(isBoolean(true)).toBeTruthy();
    });
});
describe('is a Array', () => {
    it('properly tells if a value is an Array', () => {
        expect(isArray([])).toBeTruthy();
        expect(isArray('hi')).toBeFalsy();
    });
});      
describe('an object', () => {
    it('properly tells if a value is an Object', () => {
        expect(isObject({})).toBeTruthy();
        expect(isObject('hi')).toBeFalsy();
    });
});
describe('is a function', () => {
    it('properly tells if a value is a function', () => {
        expect(isFunction(() => {})).toBeTruthy();
        expect(isFunction('hi')).toBeFalsy();
    });
});

//caster tests follow:
describe('casters', () => {
    it ('can cast values to a number', () => {
        expect(castToNumber(3)).toEqual(3);
        expect(castToNumber('3')).toEqual(3);
        expect(castToNumber(true)).toEqual(1);
        expect(castToNumber(false)).toEqual(0);
    });
});
describe('casters', () => {
    it ('can cast values to a string', () => {
        expect(castToString(3)).toEqual('3');
        expect(castToString('3')).toEqual('3');
    });
});   
//         it ('throws if value is not castable to number', () => {
//             expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
//             expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
//         });
//     });
  
//     it ('can get the right caster', () => {
//         expect(getCaster(Number)).toEqual(castToNumber);
//         expect(getCaster(Promise)).toBeNull();
//     });
// });