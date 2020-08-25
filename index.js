const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title"
  },
  {
    type: "input",
    message: "Give a description of your application.",
    name: "description"
  },
  {
    type: "input",
    message: "what comand should the user run to install the dependancies?",
    default: "npm i",
    name: "install"
  },
  {
    type: "input",
    message: "How does this user use your application?",
    name: "usage"
  },
  {
    type: "list",
    message: "What kind of licensing does your application have?",
    name: "license",
    choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD", "NONE"]
  },
  {
    type: "input",
    message: "Would you like your users to contribute to your application?",
    name: "contributing"
  },
  {
    type: "input",
    message: "How do your users test your application?",
    name: "tests"
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "githubUsername"
  },
  {
    type: "input",
    message: " What is your email address?",
    name: "email"
  }

];

// function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile( "README.md" , md);
// }

// function to initialize program
function init() {
  inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, 2));

    // 1. pass answers into generateMarkdown() and save result in a variable
    const md = generateMarkdown(answers);
    console.log(md);

    fs.writeFile("README1.md", md, err => {

    }

      // 2. pass result from line above into writeFile()
      //writeToFile("README.md", md);
    )
  });
}

// function call to initialize program
init();
