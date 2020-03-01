// Manager class

// Extends Employee class
// Role set to Manager
// getOfficeNumber() returns office number

const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNumber = officeNum;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;