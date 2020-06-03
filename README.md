# team-profile-generator

Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.

## Function

Run application:

```nodejs
npm start
```

OR

```node
node app.js
```


## Features

 * User is will be prompted for employee information:

    * name
    * role (engineer, intern, manager)
    * email

 * Based on input for employee role, user will be prompted for additional information:
    * engineer : github username
    * intern : school
    * manager : office number

 * After employee info is provided, user will be prompted to add another employee

 * Once all employees have been added, the application will generate a team profile html file to [Output Folder](./output/team.html)

 ![Output Example](./assets/demo_team-profile-generator.png)



## Technologies

### FrontEnd

* [Bootstrap](https://getbootstrap.com/)
* HTML
* JavaScript

### Backend

* [Node.js](https://nodejs.org/en/)
* [Inquirer](https://github.com/SBoudrias/Inquirer.js/)



## Testing

[Jest](https://jestjs.io/)

```nodejs
npm test
```






## License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 Courtney J. Seto



