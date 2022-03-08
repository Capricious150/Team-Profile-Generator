// Dependencies. Jest needed here?
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

// Custom dependency
const generateFiles = require('./src/generateFiles');
const classes = require('./lib/classes');

const Employee = classes.Employee;
const Manager = classes.Manager;
const Engineer = classes.Engineer;
const Intern = classes.Intern;

const roster = [];



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
 addEmployeeChoicePrompts: ["Add an Engineer", "Add an Intern", "Finished building team"]
}

function writeFiles(){
    fs.writeFile("./dist/index.html", generateFiles.generateHTML(), (err) =>{
        (err) ? console.log(err) : console.log(`index.html created successfully!`)
    })
    fs.writeFile("./dist/style.css", generateFiles.generateCSS(), (err) =>{
        (err) ? console.log(err) : console.log(`style.css created successfully!`)
    })
    fs.writeFile("./dist/script.js", generateFiles.generateScript(), (err) =>{
        (err) ? console.log(err) : console.log(`script.js created successfully!`)
    })
}

writeFiles()

// function init(){
//     console.log("Code will go here")
// }

// init()


// ============
// Test code looking for a solution to reading through the array of employees.
// ============
// const austin = new Manager("Austin","ID01","austinandrews89@gmail.com","Office 01");
// const ryan = new Engineer("Ryan","ID02","rwogan@opentable.com","BigRed");
// const kyle = new Intern("Kyle","ID03","kyle@kyle.org","Denver University");
// const kevin = new Engineer("Kevin","ID04","klin@opentable.com","Linster");
// const trent = new Engineer("Trent","ID05","tcornwall@opentable.com","TCornwall");
// const maria = new Intern("Maria","ID04","maria@maria.org","Denver University");

// roster.push(austin, ryan, kyle, kevin, trent, maria);

// console.log (roster);

// for (let i = 0; i < roster.length; i++) {
    
//     if (roster[i].hasOwnProperty('_officeNumber')){
//         console.log("Manager")
//     } else if (roster[i].hasOwnProperty('_github')){
//         console.log("Engineer")
//     } else if (roster[i].hasOwnProperty('_school')){
//         console.log("Intern")
//     } else (console.log("I didn't read Manager, Engineer, or Intern"))
    
// }