//Bring in all info from Employee
const Employee = require('./Employee');

//Defining intern class
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;