const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    it('should render triangle svg file inputs and the color of the shape', () => {
        const expectedResult = `<polygon points="100 20, 20 180, 180 180" fill="red" />
    <text x="100" y="150" font-size="50" text-anchor="middle" fill="white">abc</text>`;
        const triangle = new Triangle('red', 'abc', 'white');
        expect(expectedResult).toEqual(triangle.render());
    })
})