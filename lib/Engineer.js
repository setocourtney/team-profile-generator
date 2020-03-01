// Engineer class

// Extends Employee class
// Instantiates with name, id, email, github
// Role set to Engineer
// getGithub() returns gitHub profile link

const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }
};

const engr = new Engineer("Courtney", 1, "cc", "setocourtney");
console.log(engr.getGithub());
module.exports = Engineer;