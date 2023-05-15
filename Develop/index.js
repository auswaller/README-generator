const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    "Please enter the project title",
    "Please enter a description for your project",
    "Please enter the installation instructions",
    "Please enter the usage information",
    "Please enter the contribution guidelines",
    "Please enter the test instructions",
    "Please select the license for the project",
    "Please enter your GitHub username",
    "Please enter your email address"
];

function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data,
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
            {
                type: 'list',
                message: questions[6],
                name: 'license',
                choices: ['MIT', 'Apache License 2.0', 'GNU GPLv3', 'ISC License'],
            },
            {
                type: 'input',
                message: questions[7],
                name: 'github',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email',
            },
        ])
        .then((response) => {
            writeToFile(response.name,generateMarkdown(response));         
        });
}

init();