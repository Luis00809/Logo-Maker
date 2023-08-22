const inquirer = require('inquirer')
const { writeFile } = require('fs/promises');
const createSVG = require('./lib/document');
const createDocument = require('./lib/document');
const Shapes = require('./lib/shapes');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

inquirer.prompt([
    {
        type: 'input',
        message: 'Plesase provide 3 characters for your logo',
        name: 'characters',
        validate: (characters) => characters.length <= 3 || 'characters are more than 3'
    }, 
    {
        type: 'input',
        message: 'What color would you like the shape to be?',
        name: 'shapeColor'
    },
    {
        type: 'input',
        message: 'what text color?',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'What shape would you like?',
        choices: ['circle', 'triangle', 'square'],
        name: 'shapeChoice'
    }
]).then ((response ) => {
   
let shape;

if(response.shapeChoice === 'circle') {
    shape = new Circle(response.shapeColor, response.characters, response.textColor )
}else if(response.shapeChoice === 'triangle'){
    shape = new Triangle(response.shapeColor, response.characters, response.textColor )
} else if (response.shapeChoice === 'square'){
    shape = new Square(response.shapeColor, response.characters, response.textColor )
}
console.log(shape);
// how to change format into .catch
const svg = createDocument(shape);
writeFile('./examples/logo.svg', svg, (err) => 
err ? console.error(err) : console.log('Success'));
}).then(() => console.log('Generated logo.svg'))
.catch((err) => {
    console.log(err);
    console.log('something went wrong')
})