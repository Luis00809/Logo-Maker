const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    it('should render triangle svg file inputs and the color of the shape', () => {
        const expectedResult = `<polygon points="50 10, 10 90, 90 90" fill="red"`;
        const triangle = new Triangle('red', 'abc', 'white');
        expect(expectedResult).toEqual(triangle.render());
    })
})