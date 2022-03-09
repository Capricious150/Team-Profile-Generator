// Dependencies. Jest needed here?
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

// Custom dependency
const generateFiles = require('./src/generateFiles');
const classes = require('./lib/classes');
const { appendFileSync } = require('fs');

const Employee = classes.Employee;
const Manager = classes.Manager;
const Engineer = classes.Engineer;
const Intern = classes.Intern;

const roster = [];

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

const writeFiles = () => {
    fs.writeFileSync("./dist/index.html", generateFiles.generateHTML())
    fs.writeFileSync("./dist/style.css", generateFiles.generateCSS())
    fs.writeFileSync("./dist/script.js", generateFiles.generateScript())  
    inquireInit()
}




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


function buildTeam(){

    for (let i = 0; i < roster.length; i++) {
    
        if (roster[i].hasOwnProperty('_officeNumber')){
            fs.appendFileSync("./dist/script.js", '\n' + `mainDivEl.append('<div class="employeeCard"><div class="employeeHeader"><h3>${roster[i]._name}</h3><h4>Manager</h4></div><div class="employeeBody"><ul><li>ID: ${roster[i]._id}</li><li><a href="mailto:${roster[i]._email}">${roster[i]._email}</a></li><li>Office Number: ${roster[i]._officeNum}</li></ul></div></div>');`)
        } else if (roster[i].hasOwnProperty('_github')){
            fs.appendFileSync("./dist/script.js", '\n' + `mainDivEl.append('<div class="employeeCard"><div class="employeeHeader"><h3>${roster[i]._name}</h3><h4>Manager</h4></div><div class="employeeBody"><ul><li>ID: ${roster[i]._id}</li><li><a href="mailto:${roster[i]._email}">${roster[i]._email}</a></li><li>GitHub: <a href="https://github.com/${roster[i]._github}/">${roster[i]._github}</a></li></ul></div></div>');`)
        } else if (roster[i].hasOwnProperty('_school')){
            fs.appendFileSync("./dist/script.js", '\n' + `mainDivEl.append('<div class="employeeCard"><div class="employeeHeader"><h3>${roster[i]._name}</h3><h4>Intern</h4></div><div class="employeeBody"><ul><li>ID: ${roster[i]._id}</li><li><a href="mailto:${roster[i]._email}">${roster[i]._email}</a></li><li>Office Number: ${roster[i]._school}</li></ul></div></div>');`)
        } else (console.log("I didn't read Manager, Engineer, or Intern"))
        
    }

}


writeFiles()


    // generateManagerDiv,
    // generateEngineerDiv,
    // generateInternDiv





// writeFiles()
// inquireInit()
// chooseTeamOption()

// const austin = new Manager("Austin","ID01","austinandrews89@gmail.com","Office 01");
// inquire()










// ============
// Test code looking for a solution to reading through the array of employees.
// ============
// const ryan = new Engineer("Ryan","ID02","rwogan@opentable.com","BigRed");
// const kyle = new Intern("Kyle","ID03","kyle@kyle.org","Denver University");
// const kevin = new Engineer("Kevin","ID04","klin@opentable.com","Linster");
// const trent = new Engineer("Trent","ID05","tcornwall@opentable.com","TCornwall");
// const maria = new Intern("Maria","ID04","maria@maria.org","Denver University");

// roster.push(austin, ryan, kyle, kevin, trent, maria);

// console.log (roster);

