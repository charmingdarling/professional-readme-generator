// Questions for user prompting in an array

const questions = [
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
    message: "Will you provide an image files for usage?",
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
];

module.exports = questions; // Modularization of the variable of questions
