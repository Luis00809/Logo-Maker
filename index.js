const inquirer = require('inquirer')
const { writeFile } = require('fs/promises');

inquirer.prompt([
    {
        type: 'input',
        message: 'Plesase provide 3 characters for your logo',
        name: 'characters'
    }, 
    {
        type: 'input',
        message: 'What color would you like to use?',
        name: 'color'
    },
    {
        type: 'list',
        message: 'What shape would you like?',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape'
    }
]).then ((response ) => {
    console.log(response.characters);
    console.log(response.color);
    console.log(response.shape);

    let logoText = response.characters.slice(0,3);
    console.log(logoText);

    // writeFile('logo.svg', )
})