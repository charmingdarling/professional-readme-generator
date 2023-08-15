// TODO: Include packages needed for this application

const inquirer = require("inquirer"); // Stating inquirer is a dependency. Node will know to look in my node_modules folder.
const fs = require("fs"); // Stating file system module is required
const generateMarkdown = require("./utils/generateMarkdown"); // Requiring using this file
const data = require("");

// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: "input",
      message: "Where would you like to save your README.md? ",
      name: "fileLocation",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter the description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "Enter your installation instructions:",
      name: "install",
    },
    {
      type: "input",
      message: "Will you provide a image files for usage?",
      name: "usage",
    },
    {
      type: "input",
      message: "Enter your contribution Guidelines:",
      name: "contribution",
    },
    {
      type: "input",
      message: "What are your test instructions?",
      name: "test",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "GitHub",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "list",
      name: "license",
      message: "Which license are you using?",
      choices: ["Apache", "Boost", "Eclipse", "MIT", "Mozilla"],
    },
  ])

  // function writeToFile(fileLocation, data) {
  //     if (fileLocation.charAt(fileLocation.length-1) !== "/") { // Checks the file location and looks for the last character to match '/'
  //       fileLocation += "/" // If there is no '/' at the end of fileLocation, it adds a '/'
  //     }
  //     fs.writeFile(`${fileLocation}README.md`, data) // Writing file in the 'fileLocation' as a README.md', Data - the output of generateMarkdown is passed into data
  //   }

  .then(function (answer) {
    fs.writeFile("README.md", generateMarkdown(answer), (err) =>
      err ? console.error(err) : console.log("You created a README.md file.")
    );
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) => {
//     if (err) {
//       console.error(err);
//     }
//     console.log("Saved.");
//   });
// }

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// // Function call to initialize app
init();