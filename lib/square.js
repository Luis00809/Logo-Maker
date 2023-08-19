const Shapes = require('./shapes.js');

class Square extends Shapes {
    constructor(shapeColor, characters, textColor){
        super(shapeColor, characters, textColor);
    }

    render() {
        return `<rect x="20" y="20" width="30" height="30" fill="${this.shapeColor}" />`;
    }
}

module.exports = Square;