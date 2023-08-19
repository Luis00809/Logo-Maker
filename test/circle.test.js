const Circle = require('../lib/circle');

describe('Circle', () => {
    it('should render cirlce svg file inputs and the color of the shape', () => {
        const expectedResult =  `<circle cx="150" cy="100" r="80" fill="red"`;
        const circle = new Circle('red', 'abc', 'white');
        expect(expectedResult).toEqual(circle.render());
    })
})