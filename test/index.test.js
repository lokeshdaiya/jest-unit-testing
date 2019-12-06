var sum = require('../index');

describe('sum test', () => {
    test('test sum', () => {
         expect(sum(2,3)).toBe(5);   
    })
})