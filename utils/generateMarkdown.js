// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "n/a") {
    return ""
  }
  return "![license badge](https://img.shields.io/badge/license-"+`${license}`+"-yellowgreen.svg)"
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "n/a") {
    return ""
  }
  return "- [License](#license)"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "n/a") {
    return ""
  }
  return `## License
  
  This project uses the ${license} license. 
  **If you have questions on the license please check the following site [choose a license](www.google.com)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.description}
${data.motivation}
${data.why}
${data.solves}
${data.learned}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Visuals](#visuals)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contribution}

## Tests

${data.testing}

## Questions

Please feel free to explore my other projects on github: [${data.username}](https://www.github.com/${data.username})

If you have further questions you may send me an email at: ${data.email}

## Visuals

Link to deployed application:
[${data.title}](${data.deployed})
`;
}

module.exports = generateMarkdown;