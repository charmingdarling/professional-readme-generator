# 09 Node.js Challenge: Professional README Generator

## Your Task

Our task is to create a command-line application that generates a professional README.md file dynamically based off a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

The application will be invoked by using the following command:

```bash
node index.js
```

This application will not be deployed. Here is the link that as a walkthrough video to demonstrate the functionality. The video will walk through questions prompted to the user and then show the generated README file as well as looking through the file in preview.

[Link to video demo](https://drive.google.com/file/d/1x8pdpH2OjQuAKp7q4alZPjh8qPz8KBZa/view)

[Link to GitHub Repository](https://github.com/charmingdarling/professional-readme-generator)

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```