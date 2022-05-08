// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (!license){
    return ''
  } else {
    if (license === "MIT") {
      return String.raw`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license === "Apache") {
      return String.raw`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === "GPL 3.0") {
      return String.raw`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === "GPL 2.0") {
      return String.raw`[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    } else if (license === "BSD 3") {
      return String.raw`[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  if (!license) {
    return ''
  } else {
    return String.raw`- [License](#license) `}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  } else {
    return String.raw`## License
    This project uses the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.name}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}

  ## Installation

  ${data.installation}
  
  ## Usage

  ${data.usage}

  ## Contributing
  
  ${data.contribution}

  ## Tests
  
  ${data.tests}

  ## Questions

  If you have any questions, please reach out to mat at the following places:
  
  - ${data.email}
  - [github](github.com/${data.username})

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
