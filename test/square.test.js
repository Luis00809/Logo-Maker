const Square = require('../lib/square');

describe('Square', () => {
    it('should render square svg file inputs and the color of the shape', () => {
        const expectedResult = `<rect x="80" y="30" width="160" height="150" fill="red" />

<text x="160" y="125" font-size="80" text-anchor="middle" fill="white">abc</text>`;

        const square = new Square('red', 'abc', 'white');

        expect(square.render()).toEqual(expectedResult);
    })
})