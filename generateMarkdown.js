// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

${data.installation}


## Usage

${data.usage}

## License

![github license(https://img.shields.io/badge/license-${data.license}-blue.svg)

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

Have questions? Feel free to contact me on [GitHub](http://github.com/${data.githubUsername}). Or, email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
