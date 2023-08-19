const Square = require('../lib/square');

describe('Square', () => {
    it('should render square svg file inputs and the color of the shape', () => {
        const expectedResult = `<rect x="20" y="20" width="30" height="30" fill="red" />`;
        const square = new Square('red');
        expect(expectedResult).toEqual(square.render());
    })
})