// TODO: Include packages needed for this application


const inquirer = require('inquirer'); //downloaded inquirer
const fs = require('fs'); //file system package
const generateMarkdown = require('./utils/generateMarkdown'); //access to markdown.js



// TODO: Create an array of questions for user input
const questions = [

    //project title

    // description of the project

    // how to installl project

    // how to use the project

    // licenses available

    // developer credits

    //lists tests of project


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Creation of your README was a success!");
    });

};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(input) {
            console.log(input)
            writeToFile("README.md", generateMarkdown(input));
        });
};

// Function call to initialize app
init();