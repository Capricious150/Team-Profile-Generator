// Dependencies. Jest needed here?
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

// Custom dependency
const generateFiles = require('./src/generateFiles');

// Building a series of arrays for inquirer prompts. 
// Make into a single object??
// const promptObject = []


const managerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the Team Manager.'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the Team Manager Employee ID.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email address of the Team Manager.'
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'Enter the office number of the Team Manager.'
    }
];
const engineerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the Engineer.'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the ID of the Engineer.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email address of the Engineer.'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter the GitHub Profile Name of the Engineer.'
    }
];
const internPrompts = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the Intern.'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the id of the Intern.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email address of the Intern.'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter the school the Intern is attending.'
    }
];
const addEmployeeChoicePrompts = ["Add an Engineer", "Add an Intern", "Finished building team"];


// ==============
// Test code to ensure dependcies working as intended. First time use of an arrow function
// with implicit Return in generateHTML.js
// function testWrite(){
    //     fs.writeFile("sample_HTML.html", generateFiles.generateHTML(), (err) => {
        //         (err) ? console.log(err) : console.log("Callback executed, file created!")
        //     })
        // }

// testWrite();
// ==============