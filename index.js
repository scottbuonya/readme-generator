// array of questions
// for user
const questions = [{
        type: "input",
        message: "What is your Github?",
        name: "github"

    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title?",
        name: "title"
    },
    {
        type: "input",
        message: "Description?",
        name: "description"
    },
    // {
    //     type: "input",
    //     message: "Table of Contents?",
    //     name: "table"
    // },
    {
        type: "input",
        message: "How do you Install?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "Usage?",
        name: "usage"
    },
    {
        type: "list",
        message: "Please select a type of license.",
        choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "What is your repository?",
        name: "repo"
    },
    {
        type: "input",
        message: "What did you contribute?",
        name: "contribution"
    },
    {
        type: "input",
        message: "Tests?",
        name: "tests",
        default: "npm test"
    },
    {
        type: "input",
        message: "Do you have any questions?",
        name: "questions"
    }
];


var inquirer = require("inquirer");
var fs = require("fs");
var path = require("path");
var generateMarkDown = require("./utils/generateMarkdown");

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

inquirer.prompt(questions).then(response => {
    console.log(response);

    writeToFile("READMEGEN.md", generateMarkDown({
        ...response
    }))


});