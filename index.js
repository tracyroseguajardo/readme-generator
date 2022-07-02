// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
const path = require("path")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Incude a short description of your project:",
        name: "description",
    },
    {
        type: "input",
        message: "What was your motivation?",
        name: "motivation",
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "why",
    },
    {
        type: "input",
        message: "What problem does it solve?",
        name: "solves",
    },
    {
        type: "input",
        message: "What did you learn",
        name: "learned",
    },
    {
        type: "input",
        message: "Include step-by-step installation instructions:",
        name: "installation",
    },
    {
        type: "input",
        message: "Instructions on usage:",
        name: "usage",
    },
    {
        type: "list",
        message: "Include licenses",
        name: "license",
        choices: ["MIT", "GNU_GPLv3", "Mozilla_Public_License_2.0", "Apache", "n/a"]
    },
    {
        type: "input",
        message: "Describe how users can contribute",
        name: "contribution",
    },
    {
        type: "input",
        message: "Test instructions:",
        name: "testing",
    },
    {
        type: "input",
        message: "Github Username:",
        name: "username",
    },
    {
        type: "input",
        message: "Email:",
        name: "email",
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((response) => {
            writeToFile('README.md', generateMarkdown(response));
        });

}

// Function call to initialize app
init();
