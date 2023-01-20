import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import generateMarkdown from "./utils/generate-markdown.js";

// array of questions for user
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
    default() {
      return "wisethee";
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    default() {
      return "marius.paduraru@gmail.com";
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
    default() {
      return "Professional README Generator";
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project",
    default() {
      return "This is a command line interface application which creates a README file for your application repositories. This will allow people to understand how your app works, how to install it, and how other developers can contribute to your project. This README.md is being created via this system.";
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "What command should be run to install dependencies to your project?",
    default() {
      return "npm i";
    },
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests to your project?",
    default() {
      return "npm run test";
    },
  },
  {
    type: "input",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    default() {
      return "MIT";
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter the usage information",
    default() {
      return "Run the command ```npm run``` in the CLI. As you answer each question you dynamically form the sections, and table of contents for your README.";
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
    default() {
      return "Usage contributing";
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({ ...answers }));
  });
}

// function call to initialize program
init();
