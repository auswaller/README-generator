const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    "Please enter the project title",
    "Please enter a description for your project",
    "Please enter the installation instructions",
    "Please enter the usage information",
    "Please enter the contribution guidelines",
    "Please enter the test instructions"
];

function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.txt`,data, 
    (err) => err ? console.error(err) : console.log('Successfully wrote file!'));
}

function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'name',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'description',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installation',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'usage',
      },
      {
        type: 'input',
        message: questions[4],
        name: 'contributions',
      },
      {
        type: 'input',
        message: questions[5],
        name: 'test',
      },
  ])
  .then((response) => {
    
  });
}

init();