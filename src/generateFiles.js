const generateHTML = () => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Roster</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>    
        <header>
            <h1>My Team</h1>
        </header>
        <div class = "mainDiv">

        </div>
    </main>
</body>
</html>`


// To Do: Template Literal for style.css
const generateCSS = () => 
`main {
    display: flex;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

header {
    background-color: red;
    color: white;
    position: relative;
    width: 100vw;
    height: 15vh;
    margin: 0;
    text-align: center;
}

.mainDiv {
    display: flex;
}

.employeeCard {
    box-shadow: 5px;
}

.employeeHeader {
    background-color: blue;
    color: white;
}

.employeeBody {
    background-color: beige;
}`


// To Do: Template literal for script.js
const generateScript = () =>
``

const generateManagerDiv = (data) =>
``

const generateEngineerDiv = (data) =>
``

const generateInternDiv = (data) =>
``

module.exports = {
    generateHTML,
    generateCSS,
    generateScript,
    generateManagerDiv,
    generateEngineerDiv,
    generateInternDiv
}