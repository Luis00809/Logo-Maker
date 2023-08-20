// will export classes here
const Shapes = require('./shapes');
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

// will need to add in parameters
let createDocument = (shape) => {


return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${shape.render()};

</svg>`
}

module.exports =  createDocument