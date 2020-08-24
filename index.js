const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
  {
      type: "input",
      message: "What is your project title?",
      name: "title"
  }
];

// function to write README file
function writeToFile(fileName, data) {
  // fs.writeFile(...);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(answers => {
      console.log(JSON.stringify(answers, null, 2));

      // 1. pass answers into generateMarkdown() and save result in a variable
      const md = generateMarkdown(answers);
      console.log(md);

      // 2. pass result from line above into writeFile()
      //writeToFile("README.md", md);
  });
}

// function call to initialize program
init();
