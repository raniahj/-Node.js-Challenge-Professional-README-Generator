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
      message: "Please enter any required packages for this app",
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
      message: "Please enter test information for this app?",
      name: "Test",
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) { throw err };
      console.log("The file was written successfully")
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((data) => {
      writeToFile("generatedMd.md", data);
      console.log(data);
    });
  }
  

// Function call to initialize app
init();
