// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let licenseBadge = "";
  if (!confirmLicense){
    return
  } else {
    if (data.licenseType === "MIT") {
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (data.licenseType === "Apache") {
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (data.licenseType === "GPL 3.0") {
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (data.licenseType === "GPL 2.0") {
      licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    } else if (data.licenseType === "BSD 3") {
      licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  let licenseLink = "";
  if (!confirmLicense){
    return
  } else {
    if (data.licenseType === "MIT") {
      licenseLink = "(https://opensource.org/licenses/MIT)"
    } else if (data.licenseType === "Apache") {
      licenseLink = "(https://opensource.org/licenses/Apache-2.0)"
    } else if (data.licenseType === "GPL 3.0") {
      licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)"
    } else if (data.licenseType === "GPL 2.0") {
      licenseLink = "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    } else if (data.licenseType === "BSD 3") {
      licenseLink = "(https://opensource.org/licenses/BSD-3-Clause)"
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}


  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}
  
  ## Usage

  ${data.usage}

  ## License

  ## Contributing
  
  ${data.contribution}

  ## Tests
  
  ${data.tests}

  ## Questions

  If you have any questions, please reach out to mat at the following places:
  - ${data.email}
  - [github](github.com/${data.username})

`;
}

module.exports = generateMarkdown;
