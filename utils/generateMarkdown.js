// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![Badge](https://img.shields.io/badge/License-MIT-brightgreen)
#${data.title}

## GitHub
${data.github}

## Email
${data.email}

## Description
${data.description}

## Table of Contents
* [installation](#installation)

* [repository](#repository)

* [license](#license)

* [tests](#tests)

* [contribution](#contribution)

* [questions](#contribution)

## Installation
${data.installation}

## Repository 
${data.repo}

## License
${data.license}


## Tests
${data.tests}

## Contribution
${data.contribution}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
