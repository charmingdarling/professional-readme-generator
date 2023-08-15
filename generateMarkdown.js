const {} = licenses;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `${badge}`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `https://img.shields.io/badge/License-${license}-blue.svg`;
  }
}

function renderLicenseLink(license) {
  if (!license.length === 0) {
    return `https://opensource.org/licenses/${license}`;
  }
}

function renderLicenseSection(license) {
  if (!license.length === 0) {
    return `[![License](${renderLicenseBadge})](${renderLicenseLink})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title: <${data.title}>
  ## Description: ${data.description}
  ## Installation: ${data.install}
  ## Usage: ${data.usage} 
  ## License: ${renderLicenseBadge(data.license)}
  ## Tests: ${data.test}
  ## Email: ${data.email}
  ## GitHub: ${data.GitHub}
  ## How to Contribute: ${data.contribution}
`;
}

module.exports = generateMarkdown;

// TODO Badge
// Apache / [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// Boost [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
// Eclipse [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
// MIT / [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// Mozilla [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// ("[![License]()]()");

// TODO Resources
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#file-license-badges-md
// https://github.com/srvidales/mk-readme/blob/main/utils/data.json
// https://github.com/rails/rails/blob/main/README.md
// https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
