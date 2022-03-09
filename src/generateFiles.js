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
    <header>
        <h1>My Team</h1>
    </header>
    <main>    
        <div class = "mainDiv">

        </div>
    </main>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="script.js"></script>
</body>
</html>`


// To Do: Template Literal for style.css
const generateCSS = () => 
`* {
    box-sizing: content-box;
}

main {
    display: flex;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
}

h3, h4{
    margin: 0;
    margin-left: 3%;
}

ul {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-left: 0;
    padding: 1%;
}

li{
    list-style: none;
    margin: 0;
    background-color: beige;
    word-wrap: normal;
    margin-bottom: 2%;
}

a{
    word-wrap: break-word;
}

header {
    background-color: red;
    color: white;
    position: absolute;
    width: 100vw;
    height: 15vh;
    margin: 0;
    text-align: center;
}

.mainDiv {
    margin-top: 15vh;
    padding: 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    background-color: beige;
}

.employeeCard {
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    height: 40vh;
    width: 20vw;
    margin: 10px;
}

.employeeHeader {
    background-color: blue;
    color: white;
    margin: 0;
    width: 100%;
    height: 30%;
    padding-top: 10%;
}

.employeeBody {
    flex-wrap: wrap;
    word-wrap: normal;
    background-color: white;
    margin: 0;
    width: 100%;
    height: 50%;
    padding-top: 10%;
    font-size: auto;
}`


// To Do: Template literal for script.js
const generateScript = () =>
`const mainDivEl = $(".mainDiv");`

const generateManagerDiv = () =>
`mainDivEl.append('<div class="employeeCard"><div class="employeeHeader"><h3>${roster[i].Manager._name}</h3><h4>Manager</h4></div><div class="employeeBody"><ul><li>ID: ${roster[i].Manager._id}</li><li><a href="mailto:${roster[i].Manager._email}">${roster[i].Manager._email}</a></li><li>Office Number: ${roster[i].Manager._officeNum}</li></ul></div></div>');`

const generateEngineerDiv = () =>
`mainDivEl.append('<div class="employeeCard"><div class="employeeHeader"><h3>${roster[i].Engineer._name}</h3><h4>Manager</h4></div><div class="employeeBody"><ul><li>ID: ${roster[i].Engineer._id}</li><li><a href="mailto:${roster[i].Engineer._email}">${roster[i].Engineer._email}</a></li><li>GitHub: <a href="https://github.com/${roster[i].Engineer._github}/">${roster[i].Engineer._github}</a></li></ul></div></div>');`


const generateInternDiv = () =>
`mainDivEl.append('<div class="employeeCard"><div class="employeeHeader"><h3>${roster[i].Intern._name}</h3><h4>Intern</h4></div><div class="employeeBody"><ul><li>ID: ${roster[i].Intern._id}</li><li><a href="mailto:${roster[i].Intern._email}">${roster[i].Intern._email}</a></li><li>Office Number: ${roster[i].Intern._school}</li></ul></div></div>');`


module.exports = {
    generateHTML,
    generateCSS,
    generateScript,
    generateManagerDiv,
    generateEngineerDiv,
    generateInternDiv
}