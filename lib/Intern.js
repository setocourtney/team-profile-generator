// Intern class

// Extends Employee class
// Instantiates with name, id, email, and school
// Role set to Intern
// getSchool() returns school

const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }
};

module.exports = Intern;