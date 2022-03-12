// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      message: "Please enter your GitHub username",
      name: "UserName",
    },
    {
      type: "input",
      message: "Please enter your email address",
      name: "Email",
    },
  
    {
      type: "input",
      message: "Please enter the title of your project",
      name: "Title",
    },
    {
      type: "input",
      message: "Please enter the description of your project.",
      name: "Description",
    },
    {
      type: "input",
      message: "Enter any necessary dependencies for this app",
      name: "Installation",
    },
    {
      type: "input",
      message: "What is this app used for?",
      name: "Usage",
    },
    {
      type: "input",
      message: "What license was used for this README?",
      name: "License",
    },
    {
      type: "input",
      message: "What command do you use to test this App?",
      name: "Test",
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((answers) => {
      writeToFile("generatedMd.md", answers);
      console.log(answers);
    });
  }
  

// Function call to initialize app
init();
