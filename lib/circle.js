const Shapes = require('./shapes.js');

class Circle extends Shapes {
    constructor(shapeColor, characters, textColor){
        super(shapeColor, characters, textColor);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>`
    }
}

module.exports = Circle;