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
    message:"Give a description of your application.",
    name:"description"
  },
  {
    type: "input",
    message: "How does the user install your application?",
    name: "install"
  },
  {
    type:"input",
    message:"How does this user use your application?",
    name:"usage"
  },
  {
    type: "checkbox",
    message:"What kind of licensing does your application have?",
    name:"license",
    choices:["MIT", "APACHE 2.0", "GPL 3.0" , "BSD", "NONE"]
  },
  {
    type: "input",
    message:"Would you like your users to contribute to your application?",
    name:"contributing"
  },
  {
    type: "input",
    message:"How do your users test your application?",
    name: "tests"
  },
  {
    type: "input",
    message:"What is your GitHub username?",
    name: "githubUsername"
  },
  {
    type: "input",
    message:" What is your email address?",
    name: "email"
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
