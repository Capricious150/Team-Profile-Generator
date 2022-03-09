const employeeFile = require('../lib/classes.js');

const Employee = employeeFile.Employee;
const Manager = employeeFile.Manager;
const Engineer = employeeFile.Engineer;
const Intern = employeeFile.Intern;

describe("Employee Test", () =>{
    it("Should make an object with an email", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const emp = new Employee(name, id, email)
        expect(emp.email).toEqual(email)
    })
    it("Should make an object with a name", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const emp = new Employee(name, id, email)
        expect(emp.name).toEqual(name)
    })
    it("Should make an object with an id", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const emp = new Employee(name, id, email)
        expect(emp.id).toEqual(id)
    })
    it("Should make an object with a role of Employee", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const emp = new Employee(name, id, email)
        expect(emp.getRole()).toEqual("Employee")
    })
})

describe("Manager Test", () => {
    it("Should make an object with an email", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const officeNumber = "10"
        const emp = new Manager(name, id, email, officeNumber)
        expect(emp.email).toEqual(email)
    })
    it("Should make an object with a name", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const officeNumber = "10"
        const emp = new Manager(name, id, email, officeNumber)
        expect(emp.name).toEqual(name)
    })
    it("Should make an object with an id", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const officeNumber = "10"
        const emp = new Manager(name, id, email, officeNumber)
        expect(emp.id).toEqual(id)
    })
    it("Should make an object with an office number", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const officeNumber = "10"
        const emp = new Manager(name, id, email, officeNumber)
        expect(emp.getOfficeNumber()).toEqual(officeNumber)
    })
    it("Should make an object with a role of Manager", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const officeNumber = "10"
        const emp = new Manager(name, id, email, officeNumber)
        expect(emp.getRole()).toEqual("Manager")
    })
})


describe("Engineer Test", () => {
    it("Should make an object with an email", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const github = "Capricious150"
        const emp = new Engineer(name, id, email, github)
        expect(emp.email).toEqual(email)
    })
    it("Should make an object with a name", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const github = "Capricious150"
        const emp = new Engineer(name, id, email, github)
        expect(emp.name).toEqual(name)
    })
    it("Should make an object with an id", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const github = "Capricious150"
        const emp = new Engineer(name, id, email, github)
        expect(emp.id).toEqual(id)
    })
    it("Should make an object with an office number", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const github = "Capricious150"
        const emp = new Engineer(name, id, email, github)
        expect(emp.getGithub()).toEqual(github)
    })
    it("Should make an object with a role of Engineer", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const github = "Capricious150"
        const emp = new Engineer(name, id, email, github)
        expect(emp.getRole()).toEqual("Engineer")
    })
})

describe("Intern Test", () => {
    it("Should make an object with an email", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const school = "Denver University"
        const emp = new Intern(name, id, email, school)
        expect(emp.email).toEqual(email)
    })
    it("Should make an object with a name", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const school = "Denver University"
        const emp = new Intern(name, id, email, school)
        expect(emp.name).toEqual(name)
    })
    it("Should make an object with an id", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const school = "Denver University"
        const emp = new Intern(name, id, email, school)
        expect(emp.id).toEqual(id)
    })
    it("Should make an object with an office number", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const school = "Denver University"
        const emp = new Intern(name, id, email, school)
        expect(emp.getSchool()).toEqual(school)
    })
    it("Should make an object with a role of Intern", () => {
        const name = "Dave";
        const email = "Dave@dave.com"
        const id = "01"
        const school = "Denver University"
        const emp = new Intern(name, id, email, school)
        expect(emp.getRole()).toEqual("Intern")
    })
})