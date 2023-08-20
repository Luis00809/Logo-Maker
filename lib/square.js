const Shapes = require('./shapes.js');

class Square extends Shapes {
    constructor(shapeColor, characters, textColor){
        super(shapeColor, characters, textColor);
    }

    render() {
        return `<rect x="80" y="30" width="160" height="150" fill="${this.shapeColor}" />

<text x="160" y="125" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>`;
    }
}

module.exports = Square;