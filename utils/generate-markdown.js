// function to generate markdown for README
const generateMarkdown = (data) => {
  return `
# :file_folder: ${data.title}
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)
* [License](#license)
## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`
## Usage
Run the following command to start the app.
\`\`\`
${data.usage}
\`\`\`
## Tests
The following command can be used to test the application.
\`\`\`
${data.tests}
\`\`\`
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}).
## License
This project is licensed under the ${data.license} license.

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](LICENSE)
`;
};

export default generateMarkdown;
