const Shapes = require('./shapes.js');

class Triangle extends Shapes {
    constructor(shapeColor, characters, textColor){
        super(shapeColor, characters, textColor);
    }

    render() {
        return `<polygon points="50 10, 10 90, 90 90" fill="${this.shapeColor}"`;
    }
}

module.exports = Triangle;