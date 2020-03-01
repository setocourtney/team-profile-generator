//profile generator

//prompts for employee information
//asks questions based on employee type
//reders html cards for team profiles
//checks if file path exists, creates new folder if not
//writes to html file

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

//asks if user wants to add additional employee, renders html if not
const askAgain = () => {
    inquirer.prompt({
        name: "continue",
        type: "confirm",
        message: "Add another employee?"
    }).then((answer) => {
        if(answer.continue) {
            getEmployee();
        } else {
            let html = render(employees);
            outputProfile(html);
        }
    });
};

const createEngineer = (employee) => {
    inquirer.prompt({
        name: "github",
        type: "input",
        message: "What is the Employee\'s GitHub username?"
    }).then((answer) => {
        const engr = new Engineer(employee.name, employees.length + 1, employee.email, answer.github);
        employees.push(engr);
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
        askAgain();
    });
};

//checks if output_dir exists, creates new folder if not
const checkDir = () => {
    return new Promise((resolve, reject) => {
        fs.access(OUTPUT_DIR, fs.F_OK, (err) => {
            if (err) {
                fs.mkdir(OUTPUT_DIR, true, (err) => {
                    if(err) {
                        return reject(err);
                    }
                    console.log(`Folder made : ${OUTPUT_DIR}`);
                    resolve();
                });
            }
        });
    });
};

//writes profile to html file after director is checked and fulfilled
const outputProfile = (html) => {
    checkDir().then(() => {
        fs.writeFile(outputPath, html, (err) => {
            if (err) {
                return err;
            }
            console.log(`Profile has been made at: ${outputPath}`);
        });
    });
};