import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import generateMarkdown from "./utils/generate-markdown";

// array of questions for user
const questions = [
  {
    type: "input",
    name: "first_name",
    message: "What's your first name",
    default() {
      return "John";
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
