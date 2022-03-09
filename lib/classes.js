class Employee {
    constructor(name, id, email){
    this._name = name;
    this._id = id;
    this._email = email;
    }

    set name(newName){
        this._name = newName;
    }

    set id(newId){
        this._id=newId;
    }

    set email(newEmail){
        this._email=newEmail;        
    }

    get name(){
        return this._name
    }

    get id(){
        return this._id
    }

    get email(){
        return this._email
    }

    get role(){
        return "Employee"
    }

    getId(){
        return this._id
    }

    getEmail(){
        return this._email
    }

    getRole(){
        return "Employee"
    }
}

class Manager extends Employee{ 
    constructor(name, id, email, officeNumber){        
        super(name, id, email)
        this._officeNumber = officeNumber
    }
    
    set officeNumber(newOfficeNumber){
        this._officeNumber = newOfficeNumber
    }

    get officeNumber(){
        return this._officeNumber
    }

    get role(){
        return "Manager"
    }

    getOfficeNumber(){
        return this._officeNumber
    }

    getRole(){
        return "Manager"
    }
}

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this._github = github;
    }

    set gitHub(newGitHub){
        this._github = newGitHub
    }

    get github(){
        return this._github
    };

    get role(){
        return "Engineer"
    }

    getGithub(){
        return this._github
    };

    getRole(){
        return "Engineer"
    }
}

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this._school = school;
    }

    set school(newSchool){
        this._school = newSchool
    }

    get school(){
        return this._school;
    };

    get role(){
        return "Intern";
    }

    getSchool(){
        return this._school;
    };

    getRole(){
        return "Intern";
    }
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
}