// Dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// Custom dependencies
const generateFiles = require('./src/generateFiles');
const classes = require('./lib/classes');

// My classes are all housed in a single library which exports an object
// So I set up 3 constants for all those objects
const Manager = classes.Manager;
const Engineer = classes.Engineer;
const Intern = classes.Intern;

// Empty roster which will house all employees
const roster = [];

// Small array which will be used for the main menu prompt later 
const addEmployeeChoices = ["Add an Engineer", "Add an Intern", "Finished building team"]

// Built an object containing all inquirer prompts
const promptObject = {
 managerPrompts: [
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
],
 engineerPrompts: [
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
],
 internPrompts: [
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
],

 addEmployeeChoicePrompts: [
     {
       type: 'list',
       name: 'selection',
       message: 'Add Employee?',
       choices: addEmployeeChoices
     }
    ],     
 
}

// I approached my code using modular functions. This first one kicks everything off,
// It uses writeFileSync to ensure each file is written before proceeding, and then kicks off
// inquireInit
const writeFiles = () => {
    fs.writeFileSync("./dist/index.html", generateFiles.generateHTML())
    fs.writeFileSync("./dist/style.css", generateFiles.generateCSS())
    fs.writeFileSync("./dist/script.js", generateFiles.generateScript())  
    inquireInit()
}

// Build the team manager and push the output to the roster array.
// Then go to the main menu
function inquireInit(){
    inquirer.prompt(promptObject.managerPrompts)
    .then((data) => {
        roster.push(new Manager(data.name, data.id, data.email, data.officeNum))
        chooseTeamOption()
    })
    .catch((err => {
        console.log(err)
    }))
}

// Small function for when an engineer is being added. Functions identically to inquireInit
function addEngineer(){
    inquirer.prompt(promptObject.engineerPrompts)
    .then((data) => {
        roster.push(new Engineer(data.name, data.id, data.email, data.gitHub))
        chooseTeamOption()
    })
    .catch((err => {
        console.log(err)
    }))
}

// Small function for when an intern is being added. Functions identically to inquireInit
function addIntern(){
    inquirer.prompt(promptObject.internPrompts)
    .then((data) => {
        roster.push(new Intern(data.name, data.id, data.email, data.school))
        chooseTeamOption()
    })
    .catch((err => {
        console.log(err)
    }))
}

// Small function which acts as a main menu. Depending on the user selection, will either
// fire off addEngineer, addIntern, or go to the final builtTeam function
function chooseTeamOption(){
    inquirer.prompt(promptObject.addEmployeeChoicePrompts)
    .then((data) => {
        if (data.selection === 'Add an Engineer') {
            addEngineer()
        } else if (data.selection === 'Add an Intern') {
            addIntern()
        } else if (data.selection === 'Finished building team'){

            buildTeam()
        } else (console.log("Something went wrong!"))
    })
}

// This ugly little function iterates through the roster loop, using ".hasOwnProperty()" to
// determine whether it's looking at a manager, engineer, or intern (as the role isn't part of those objects).
// Once it figures out which it's looking at, it appends a line of javascript to script.js
// which dynamically populates index.html using JQuery
function buildTeam(){
    console.log(roster);
    for (let i = 0; i < roster.length; i++) {
    
        if (roster[i].hasOwnProperty('_officeNumber')){
            fs.appendFileSync("./dist/script.js", `\n mainDivEl.append('<div class="employeeCard"><div class="employeeHeader"><h3>${roster[i]._name}</h3><h4>Manager</h4></div><div class="employeeBody"><ul><li>ID: ${roster[i]._id}</li><li><a href="mailto:${roster[i]._email}">${roster[i]._email}</a></li><li>Office Number: ${roster[i]._officeNumber}</li></ul></div></div>');`)
        } 
        else if (roster[i].hasOwnProperty('_github')){
            fs.appendFileSync("./dist/script.js", `\n mainDivEl.append('<div class="employeeCard"><div class="employeeHeader"><h3>${roster[i]._name}</h3><h4>Engineer</h4></div><div class="employeeBody"><ul><li>ID: ${roster[i]._id}</li><li><a href="mailto:${roster[i]._email}">${roster[i]._email}</a></li><li>GitHub: <a href="https://github.com/${roster[i]._github}/" target="_blank">${roster[i]._github}</a></li></ul></div></div>');`)
        } 
        else if (roster[i].hasOwnProperty('_school')){
            fs.appendFileSync("./dist/script.js", `\n mainDivEl.append('<div class="employeeCard"><div class="employeeHeader"><h3>${roster[i]._name}</h3><h4>Intern</h4></div><div class="employeeBody"><ul><li>ID: ${roster[i]._id}</li><li><a href="mailto:${roster[i]._email}">${roster[i]._email}</a></li><li>Office Number: ${roster[i]._school}</li></ul></div></div>');`)
        } 
        else (console.log("I didn't read Manager, Engineer, or Intern"))
        
    }

}

// With all my variables and functions declared, all that remains is to fire off the writeFiles()
// function, which cascades  into the others!
writeFiles()
