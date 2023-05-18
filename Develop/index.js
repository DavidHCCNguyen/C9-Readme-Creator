// TODO: Include packages needed for this application
const readmeDocs = require('readme-docs');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions? ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'ISC', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for contributing to the project: ',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions on how to run tests: ',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: ',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const {
            title,
            description,
            installation,
            usage,
            license,
            contributing,
            tests,
            github,
            email,
        } = answers;

        // Generate license badge
        const licenseBadge = `![License](https://img.shields.io/badge/License-${encodeURIComponent(
            license
        )}-blue.svg)`;

        // Generate license notice
        const licenseNotice = `This application is covered under the ${license} license.`;

        // Generate GitHub profile link
        const githubLink = `GitHub: [${github}](https://github.com/${github})`;

        // Generate email contact
        const emailContact = `For any additional questions, feel free to reach out to me via email: [${email}](mailto:${email})`;

        const data = `# ${title}\n\n${licenseBadge}\n\n## Description\n\n${description}\n\n## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)\n\n## Installation\n\n${installation}\n\n## Usage\n\n${usage}\n\n## License\n\n${licenseNotice}\n\n## Contributing\n\n${contributing}\n\n## Tests\n\n${tests}\n\n## Questions\n\n${githubLink}\n\n${emailContact}`;

        writeToFile('README.md', data);

        // Configuration options for generateDocs function
        const options = {
            inputFile: '../README.md',
            outputFile: '../output.html',
        };

        // Generate documentation using readme-docs
        readmeDocs
            .generateDocs(options)
            .then(() => {
                console.log('Documentation generated successfully!');
            })
            .catch((error) => {
                console.error('An error occurred while generating documentation:', error);
            });
    });
}

// Function call to initialize app
init();

// node app.js