// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your project's name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a project name!");
        }
      },
    },
    {
      type: "input",
      name: "motivation",
      message:
        "What was your motivation for building this project? (Highly suggested)",
    },
    {
      type: "input",
      name: "why",
      message: "Why did you build this project? (Required)",
      validate: (whyInput) => {
        if (whyInput) {
          return true;
        } else {
          console.log(
            "Providing why you built your project is essential to a professional readME."
          );
        }
      },
    },
    {
      type: "input",
      name: "problem",
      message: "What problems does your project solve? (Required)",
      validate: (problemInput) => {
        if (problemInput) {
          return true;
        } else {
            console.log("Your project must have solved some problem!");
        }
      },
    },
    {
        type: "input",
        name: "learn",
        message: "What did you learn while creating this project? (Highly suggested)"
    },
    {
      type: "input",
      name: "installation",
      message:
        "Please enter installation instructions for your project. (Required)",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log(
            "Please enter installation instructions for your project!"
          );
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter usage instructions for your project. (Required)",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please enter usage instructions for your project!");
        }
      },
    },
    {
      type: "input",
      name: "contribution",
      message:
        "Please enter contribution guidelines for your project. (Required)",
      validate: (contributionInput) => {
        if (contributionInput) {
          return true;
        } else {
          console.log("Please enter contribution guidelines for your project!");
        }
      },
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your Github username. (Required)",
      validate: (usernameInput) => {
        if (usernameInput) {
          return true;
        } else {
          console.log("Please enter your username!");
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email. (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email!");
        }
      },
    },
    {
      type: "confirm",
      name: "confirmLicense",
      message: "Does your project use a license?",
      default: true,
    },
    {
      type: "list",
      name: "licenseType",
      message: "Please select which license you are using for your project.",
      choices: ["MIT", "Apache", "GPL 3.0", "GPL 2.0", "BSD 3"],
      when: ({ confirmLicense }) => {
        if (confirmLicense) {
          return true;
        } else {
          return false;
        }
      },
    },
  ])
  .then(answers => console.log(answers));
};

// Function call to initialize app
promptUser()