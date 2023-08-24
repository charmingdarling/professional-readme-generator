// TODO: Include packages needed for this application
const path = require("path");
const inquirer = require("inquirer"); // Stating inquirer is a dependency. Node will know to look in my node_modules folder.
const fs = require("fs"); // Stating file system module is required
const generateMarkdown = require("./utils/generateMarkdown"); // Requiring using this file
const questions = require("./utils/questions");
// TODO: Create an array of questions for user input
// TODO: Create a function to write README file
// TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions);
}

const test = async () => {
  const answer = await inquirer.prompt(questions);
  console.log(answer);
  fs.writeFile(
    `README.md`,
    generateMarkdown(answer),
    (
      err // in the second argument, the data, 'answer', is passed down
    ) =>
      err ? console.error(err) : console.log("You created a README.md file.")
  );
};

// TODO Function call to initialize app
test();
