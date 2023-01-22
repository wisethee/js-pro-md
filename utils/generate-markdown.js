// function to generate markdown for README
const generateMarkdown = (data) => {
  return `
# ${data.title}

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](LICENSE)


## Description
${data.description}

https://user-images.githubusercontent.com/31074930/213800562-2716d2e0-0ade-484e-bc23-63e2d27d8bca.mp4
![Click to see the video](https://github.com/wisethee/js-pro-md/blob/feat/dev/assets/screen-rec.mp4?raw=true)

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
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
## Contributing
Contributions, issues and feature requests are welcome.  Browse the source repository of this article and open a pull request. I will do my best to review your proposal in due time.
## Tests
The following command can be used to test the application.
\`\`\`
${data.tests}
\`\`\`
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}).
## License
This project is licensed under the ${data.license} license.
`;
};

export default generateMarkdown;
