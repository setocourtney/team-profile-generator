const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

let employees = [];

const getEmployee = () => {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the Employee\'s Name?"
        },
        {
            name: "role",
            type: "list",
            message: "What is the Employee\'s current role?",
            choices: ["Engineer", "Intern", "Manager"]
        },
        {
            name: "email",
            type: "input",
            message: "What is the Employee\'s email?"
        }
    ]).then((answer) => {
        const employee = {
            name: answer.name,
            role: answer.role,
            email: answer.email
        };
        switch (answer.role) {
            case "Engineer":
                createEngineer(employee);
                break;
            case "Intern":
                createIntern(employee);
                break;
            case "Manager":
                createManager(employee);
                break;
            default:
                break;
        };
    });
};

getEmployee();

const askAgain = () => {
    inquirer.prompt({
        name: "continue",
        type: "confirm",
        message: "Add another employee?"
    }).then((answer) => {
        if(answer.continue) {
            getEmployee();
        } else {
            return;
        }
    });
};

const createEngineer = (employee) => {
    inquirer.prompt({
        name: "github",
        type: "input",
        message: "What is the Employee\'s GitHub Profile?"
    }).then((answer) => {
        const engr = new Engineer(employee.name, employees.length + 1, employee.email, answer.github);
        employees.push(engr);
        console.log(employees);
        askAgain();
    });
};

const createIntern = (employee) => {
    inquirer.prompt({
        name: "school",
        type: "input",
        message: "Where does the Employee attend school?"
    }).then((answer) => {
        const newIntern= new Intern(employee.name, employees.length + 1, employee.email, answer.school);
        employees.push(newIntern);
        console.log(employees);
        askAgain();
    });
};

const createManager = (employee) => {
    inquirer.prompt({
        name: "office",
        type: "input",
        message: "What is the Employee\'s office number?"
    }).then((answer) => {
        const mgr= new Manager(employee.name, employees.length + 1, employee.email, answer.office);
        employees.push(mgr);
        console.log(employees);
        askAgain();
    });
};