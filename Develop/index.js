// TODO: Include packages needed for this application
const readmeDocs = require('readme-docs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Implementation to write data to a file
}

// TODO: Create a function to initialize app
function init() {
    const readline = require('readline');
    const fs = require('fs');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('What is the title of your project? ', (title) => {
        rl.question('Provide a brief description of your project: ', (description) => {
            rl.question('What are the installation instructions? ', (installation) => {
                rl.question('How do you use this project? ', (usage) => {
                    const data = `# ${title}\n\n${description}\n\n## Installation\n\n${installation}\n\n## Usage\n\n${usage}`;

                    writeToFile('README.md', data);

                    rl.close();

                    // Configuration options for generateDocs function
                    const options = {
                        inputFile: 'README.md', // Replace with the path to your README.md file
                        outputFile: 'output.html', // Replace with the desired output path and file name
                    };

                    // Generate documentation using readme-docs
                    readmeDocs.generateDocs(options)
                        .then(() => {
                            console.log('Documentation generated successfully!');
                        })
                        .catch((error) => {
                            console.error('An error occurred while generating documentation:', error);
                        });
                });
            });
        });
    });
}

// Function call to initialize app
init();
