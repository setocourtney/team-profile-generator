// Employee class

// Instantiates with Name, ID, Email as constructors
// Role defaults to Employee
// getName() returns name
// getId() returns id
// getEmail() returns email
// getRole() returns role

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.role = "Employee";
        this.email = email;
        this.id = id;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
};

module.exports = Employee;