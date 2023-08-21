const Shapes = require('./shapes.js');

class Triangle extends Shapes {
    constructor(shapeColor, characters, textColor){
        super(shapeColor, characters, textColor);
    }

    render() {
        return `<polygon points="100 20, 20 180, 180 180" fill="${this.shapeColor}" />
    <text x="100" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>`
    }
}

module.exports = Triangle;