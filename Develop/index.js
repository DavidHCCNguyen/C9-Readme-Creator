const inquirer = require('inquirer');
const readmeDocs = require('readme-docs');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this project?',
  },
  {
    type: 'input',
    name: 'learning',
    message: 'What did you learn?',
  },
  {
    type: 'input',
    name: 'special',
    message: 'What is the difference because this and the others?',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  // Implementation to write data to a file
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const { title, description, installation, usage } = answers;

    const data = `# ${title}\n\n${description}\n\n## Installation\n\n${installation}\n\n## Usage\n\n${usage}`;

    writeToFile('README.md', data);

    // Configuration options for generateDocs function
    const options = {
      inputFile: '../README.md', // Replace with the path to your README.md file
      outputFile: '../output.html', // Replace with the desired output path and file name
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
