// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://choosealicense.com/licenses)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

This project is licensed under the ${license} license. Click the badge at the top of the README to learn more about the license terms and conditions.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  const licenseLink = renderLicenseLink(data.license);

  return `# ${data.title}

${licenseBadge}
${licenseLink}

## Description

${data.description}

## Table of Contents

- [Installation](##installation)
- [Usage](##usage)
- [Contributing](##contributing)
- [Tests](##tests)
${licenseSection ? "- [License](##license)" : ""}
- [Questions](##questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.test}

${licenseSection}

## Questions

If you have any questions about this project, please contact me via:

- Email: ${data.email}
- GitHub: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
