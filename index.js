// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is the title of your project?',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Please provide a description of for project.',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Please provide usage information for your project.',
        type: 'input'
    },
    {
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.',
        type: 'input'
    },
    {
        name: 'test',
        message: 'Please provide test instructions for your project.',
        type: 'input'
    },
    {
        name: 'license',
        message: 'Please select a license for your project.',
        type: 'list',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        name: 'github',
        message: 'Please provide your GitHub username.',
        type: 'input'
    },
    {
        name: 'email',
        message: 'Please provide your email address.',
        type: 'input'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log(`${fileName} is created successfully!`);
    }
)}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile('sample_README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
