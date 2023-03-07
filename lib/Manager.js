//Bring in all info from Employee
const Employee = require('./Employee');

//Defining manager class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;