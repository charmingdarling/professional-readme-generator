// const {} = licenses;

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

//Sergio

// function renderLicenseBadge(license) {
//   if (!license) {
//     return ""; // if ! license, meaning if there is NO license, then return an empty string
//   } else {
//     return `https://img.shields.io/badge/License-${license}-blue.svg`;
//   }
// }

// function renderLicenseLink(license) {
//   if (!license.length === 0) {
//     return `https://opensource.org/licenses/${license}`;
//   }
// }

// function renderLicenseSection(license) {
//   if (!license.length === 0) {
//     return `[![License](${renderLicenseBadge})](${renderLicenseLink})`;
//   }
// }

// Luis

function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    let licenseEndpoint;
    let licenseColor;
    if (license === "Eclipse") {
      licenseEndpoint = "epl-1-0";
      licenseColor = "red";
    } else if (license === "Apache") {
      licenseEndpoint = "Apache-2.0";
      licenseColor = "blue";
    } else if (license === "GNU GPL") {
      licenseEndpoint = "gpl-3.0";
      licenseColor = "blue";
    } else if (license === "MIT") {
      licenseEndpoint = "MIT";
      licenseColor = "yellow";
    } else if (license === "Mozilla") {
      licenseEndpoint = "MPL-2.0";
      licenseColor = "brightgreen";
    } else {
      licenseEndpoint = "";
      licenseColor = "";
    }
    return `[![${license}](https://img.shields.io/badge/License-${license}-${licenseColor}.svg)](https://opensource.org/license/${licenseEndpoint})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Whatever the user types in from the index with the data.xyz is returned. We are using the dot notation of the object
  return `
  # Title: ${data.title}
  ## Description: ${data.description}
  ## Table of Contents: 
  ## Installation: ${data.install}
  ## Usage: ${data.usage} 
  ## Tests: ${data.test}
  ## How to Contribute: ${data.contribution}
  ## GitHub: ${data.GitHub}
  ## Email: ${data.email}
  ## License: ${renderLicenseBadge(data.license)}
`; // The backticks are important in
}

module.exports = generateMarkdown;

// TODO Badge
// Apache / [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// Eclipse [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
// GNU GPL v3 [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// MIT / [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// Mozilla [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// None

// ("[![License]()]()");

// TODO Resources
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#file-license-badges-md
// https://github.com/srvidales/mk-readme/blob/main/utils/data.json
// https://github.com/rails/rails/blob/main/README.md
// https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
