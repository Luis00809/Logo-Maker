const Circle = require('../lib/circle');

describe('Circle', () => {
    it('should render cirlce svg file inputs and the color of the shape', () => {
        const expectedResult = `<circle cx="150" cy="100" r="80" fill="red" />
<text x="150" y="125" font-size="80" text-anchor="middle" fill="white">abc</text>`;

        const circle = new Circle('red', 'abc', 'white');
        expect(circle.render()).toEqual(expectedResult);
    })
})
