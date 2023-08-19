const Shapes = require('./shapes.js');

class Circle extends Shapes {
    constructor(shapeColor, characters, textColor){
        super(shapeColor, characters, textColor);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"`;
    }
}

module.exports = Circle;