// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('./utils');

// TODO: Create an array of questions for user input
const questions = [
    // Ask the user for the title of the project
    {
        // project title
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log("Project Title required!");
                return false;
            }
        }

    },

    {
        // description
        type: 'input',
        name: 'description',
        message: "Provide a description of the project.",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }
            else {
                console.log('A Project Description is required!')
                return false;
            }
        }
    },

    {
        // installation
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide steps so that this can be achieved.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            }
            else {
                console.log('Installation steps need to be provided!')
                return false;
            }
        }

    },

    {
        // usage
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }
            else {
                console.log('Description on how to use the application is needed!')
                return false;
            }
        }
    },

    {
        // license
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'No license'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            }
            else {
                console.log('Please select a license.')
                return false;
            }
        }
    },

    {
        // contributing
        type: 'input',
        name: 'contribution',
        message: 'Explain how other people can contribute to the project.',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },

    {
        // tests
        type: 'input',
        name: 'testing',
        message: 'How do you test this application?',
        validate: testInput => {
            if (testInput) {
                return true;
            }
            else {
                console.log('You need to describe how to test this application!')
                return false;
            }
        }
    },

    {
        // github username
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log('Please enter your GitHub Username.');
                return false;
            }
        }
    },

    {
        // github email
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log('Please enter your email.');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log('An error has happened: ' + err);
        }
        console.log('Success!')
    })
};

const createReadMe = util.promisify(writeToFile);
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};


// Function call to initialize app
init();
