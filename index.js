// TODO: Include packages needed for this application


const inquirer = require('inquirer'); //downloaded inquirer
const fs = require('fs'); //file system package
const generateMarkdown = require('./utils/generateMarkdown'); //access to markdown.js



// TODO: Create an array of questions for user input
const questions = [

    //project title
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter a valid title for your project.");
                return false;
            }
        }
    },

    // description of the project
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project.",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please describe your project.");
                return false;
            }
        }
    },

    // how to install project
    {
        type: "input",
        name: "install",
        message: "Please provide instructions on how to install your project.",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please tell us how to install your project.");
                return false;
            }
        }
    },

    // how to use the project
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please tell us how to install your project.");
                return false;
            }
        }
    },

    // contributions
    {
        type: "input",
        name: "contr",
        message: "How can others contribute?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please tell us how to contribute to the project.");
                return false;
            }
        }
    },

    // licensing
    {
        type: "list",
        name: "license",
        message: "Provide select a license (or choose not to add one).",
        choices: ['Apache_2.0', 'MIT', 'GNU', 'The_Unlicense', 'NONE OF THE ABOVE'],
    },



    //lists tests of project
    {
        type: "input",
        name: "test",
        message: "Tests completed on the project?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please tell us what tests were done.");
                return false;
            }
        }
    },

    // git hub username

    {
        type: "input",
        name: "userName",
        message: "What is your Github Username?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter your Github Username.");
                return false;
            }
        }
    },

    //email

    {
        type: "input",
        name: "email",
        message: "What is a good email to reach you?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter your E-Mail Address.");
                return false;
            }
        }
    },


];

// TODO: Create a function to write README file
function writeFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("Creation of your README was a success!");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(input) {
            console.log(input)
            writeFile("README.md", generateMarkdown(input));
        });
};

// Function call to initialize app
init();