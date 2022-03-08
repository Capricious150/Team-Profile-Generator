const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateHTML = require('./src/generateHTML')

function testWrite(){
    fs.writeFile("sample_HTML.html", generateHTML.generateHTML(), (err) => {
        (err) ? console.log(err) : console.log("Callback executed, file created!")
    })
}

testWrite();