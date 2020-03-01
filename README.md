# team-profile-generator

Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.

## Function

Run application:

```
node app.js

```

 * User is will be prompted for employee information:

    * name
    * role (engineer, intern, manager)
    * email

 * Based on input for employee role, user will be prompted for additional information:
    * engineer : github username
    * intern : school
    * manager : office number

 * After employee info is provided, user will be prompted to add another employee

 * Once all employees have been added, the application will generate a team profile html file

 ![Output Example](./assets/demo_team-profile-generator.png)


## Files

    lib/           // classes and helper code
        Employee.js  // defines Employee object class
        Engineer.js  // extends Employee
        Intern.js    // extends Employee
        Manager.js   // extends Employee
    output/        // rendered output - not required
    templates/     // HTML template(s)
    test/          // jest tests 
        Employee.test.js
        Engineer.test.js
        Intern.test.js
        Manager.test.js
    app.js         // Runs the application

package.json file is provided to indicate dependencies:
    [jest npm package](https://jestjs.io/) : testing
    [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) : prompt for user input







