// array of questions
// for user
const questions = [
    {
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
        name: "installation"
    },
    {
        type: "input",
        message: "Usage?",
        name: "usage"
    },
    {
        type: "list",
        message: "Please select a type of license.",
        choices:["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "What is your repository?",
        name: "repo"
    },
    {
        type: "input",
        message: "Contribution?",
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
        message: "Do you havbe any questions?",
        name: "questions"
    }
];


var inquirer = require("inquirer");
var fs = require("fs");
var path = require("path")
var generateMarkDown = require("./utils/generateMarkdown")

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

inquirer.prompt(questions).then(response => {
    console.log(response);
    
    writeToFile("README.md", generateMarkDown({...response}))
    
    // function to initialize program
    
    
    


    // let readme = "";
    
    // fs.appendFile("README.md", `# ${response.title}\n`, err => {
    //     if (err) {
    //         return console.log(err);
    //     }    
    // });
    // fs.appendFile("README.md", `### ${response.description}\n`, err => {
    //     if (err) {
    //         return console.log(err);
    //     }    
    // });
    // fs.appendFile("README.md", `- ${response.table}\n`, err => {
    //     if (err) {
    //         return console.log(err);
    //     }    
    // });
    // fs.appendFile("README.md", `### ${response.installation}\n`, err => {
    //     if (err) {
    //         return console.log(err);
    //     }    
    // });
    // fs.appendFile("README.md", `### ${response.usage}\n`, err => {
    //     if (err) {
    //         return console.log(err);
    //     }    
    // });
    // fs.appendFile("README.md", `### ${response.license}\n`, err => {
    //     if (err) {
    //         return console.log(err);
    //     }    
    // });
    // fs.appendFile("README.md", `### ${response.contributing}\n`, err => {
    //     if (err) {
    //         return console.log(err);
    //     }    
    // });
    // fs.appendFile("README.md", `### ${response.tests}\n`, err => {
    //     if (err) {
    //         return console.log(err);
    //     }    
    // });
    // fs.appendFile("README.md", `### ${response.questions}\n`, err => {
    //     if (err) {
    //         return console.log(err);
    //     }    
    // });
});