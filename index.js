// Dependencies. Jest needed here?
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

// Custom dependencies. Make into one file?
const generateFiles = require('./src/generateFiles');








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