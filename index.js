// TODO: Include packages needed for this application

// Modules
const path = require("path");
const inquirer = require("inquirer"); // Stating inquirer is a dependency. Node will know to look in my node_modules folder.
const fs = require("fs"); // Stating file system module is required

// Script
const generateMarkdown = require("./utils/generateMarkdown"); // Requiring using this file
const questions = require("./utils/questions"); // Requring using this file

function init() {
  inquirer.prompt(questions);
}

const test = async () => {
  const answer = await inquirer.prompt([
    // {
    //   type: "input",
    //   message: "Where would you like to save your README.md? ",
    //   name: "fileLocation",
    // },
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
      choices: ["Apache", "Eclipse", "GNU GPL v3", "MIT", "Mozilla", "None"],
    },
  ]);

  // console.log(path.join(__dirname, "markdowns"));
  // let pathname = path.join(__dirname, answer.fileLocation); // This gets the 'answer' of the file location in questions

  // TODO: Create a function to write README file

  console.log(answer);

  // `${pathname}/README.md`
  // (err ... in the second argument, the data, 'answer', is passed down

  fs.writeFile(`README.md`, generateMarkdown(answer), (err) =>
    err ? console.error(err) : console.log("You created a README.md file.")
  );
};

// TODO Function call to initialize app
test();
