// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {



}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## License

    Licensed under ${data.license}

## Badges

[![license](https://img.shields.io/badge/License-${data.license}-red.svg)](https://img.shields.io)


## Table of Contents:

-   [Description](#description)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Contribute](#contribute)
-   [License](#license)

## Description:
${data.description}

## Installation
${data.install}

## Usage
${data.usage}

## Contribute
${data.contr}

## Questions

https://github.com/${data.userName}/

You can reach at:

Email: ${data.email}


## Tests
${data.test}

    


`;
}

module.exports = generateMarkdown;