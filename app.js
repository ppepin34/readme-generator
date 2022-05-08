// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const markdown = require("./utils/generateMarkdown");

// TODO: Create a function to write README file
const writeToFile = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", data, (err) => {
      // if there's an error reject the Promise and send to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function to make sure we don't accidentally execute resolve() as well
        return
      }

      // if successful, resolve the data to the `.then()` method
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

// TODO: Create a function to initialize app
const promptUser = () => {
  // prompt user for information to be included in readme using inquirer
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
      name: "description",
      message:
        "Please enter a description of your project. Consider why you made it, what problem/s it solves, and what you may have learned. (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a description of your project!");
        }
      },
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
      name: "tests",
      message:
        "Please enter tests for your application and how to run them. (Required)",
      validate: (testsInput) => {
        if (testsInput) {
          return true;
        } else {
          console.log("Please enter tests for you projects!");
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
      name: "license",
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
  ]);
};

// Function call to initialize app
promptUser()
  .then((data) => {
    return generateMarkdown(data);
  })
  .then((fileMarkdown) => {
    return writeToFile(fileMarkdown);
  });
