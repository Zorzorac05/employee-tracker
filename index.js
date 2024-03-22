//needed requires
const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');
require('dotenv').config();

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to sql
const db = mysql.createConnection(
    {
      host: 'localhost',
      //process.env.DB_USER
      user: process.env.DB_USER,
      //process.env.DB_PASSWORD
      password: process.env.DB_PASSWORD,
      database: 'employees_db'
    },
    console.log(`Connected to the classlist_db database.`)
);

//view departments
function viewDepartments(){
    //querry to view formatted table showing the department names and department ids
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
    });
    init();
}

//view the roles info
function viewRoles(){
    //querry to view job title, role id, the department that role belongs to and the salary of the employee
    db.query('SELECT * FROM role', function (err, results) {
        console.log(results);
    });
    init();
}

//view employee info
function viewEmployees(){
    //querry to view formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    //SELECT * FROM employee JOIN role USING (role_id)
    db.query('SELECT * from employee left join role on employee.roll_id = role.id', function (err, results) {
        console.log(results);
    });
    init();
}

//add department
function addDepartment(){
    //prompt user to enter the name of the department and that department is added to the database
    inquirer.prompt([
        {
            message: 'What is the new department?',
            name: 'newDep',
        }
    ])
    .then((response) => {
        console.log(response);
        db.query(`INSERT INTO department (name) VALUES (?);`, response.newDep ,function (err, results) {
            console.log(typeof(response.newDep));
            console.log("New department added");
        });
    });
    init();
}

//add a role
function addRole(){
    //prompt user to enter the name, salary, and department for the role and that role is added to the database
    inquirer.prompt([
        {
            message: 'What is the role?',
            name: 'newRole',
        },
        {
            message: 'What is the salary of the role?',
            name: 'newSalary',
        },
        {
            message: 'What department is the role part of?',
            name: 'newDep',
        }
    ])
    .then((response) => {
        let tempArray = [response.newRole, response.newSalary, response.newDep];
        db.query(`INSERT INTO role (title, salary, department_id) VALUES (?,?,?);`,tempArray ,function (err, results) {
            console.log("added new role");
        });
    });
    init();
}

//add a new employee
function addEmployee(){
    //prompt user to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    inquirer.prompt([
        {
            message: 'What is the first name?',
            name: 'newFirst',
        },
        {
            message: 'What is the last name?',
            name: 'newLast',
        },
        {
            message: 'What is the role?',
            name: 'newRole',
        },
        {
            message: 'Who is their manager?',
            name: 'newMan',
        },
    ])
    .then((response) => {
        let tempArray = [response.newFirst, response.newLast, response.newRole, response.newMan];
        db.query(`INSERT INTO employee (first_name, Last_name, role_id, manager_id) VALUES (?,?,?,?);`,tempArray ,function (err, results) {
            console.log("added new employee");
        });
    });
    init();
}

function updateEmployees(){
    //prompt user to select an employee to update and their new role and this information is updated in the database
    inquirer.prompt([
        {
            message: 'enter the id of the employee that needs a role changed',
            name: 'updatee',
        },
        {
            message: 'What is the new role?',
            name: 'updated',
        }
    ])
    .then((response) => {
        let tempArray = [response.updated, response.updatee];
        db.query('update employee set role_id = ? where id = ?', tempArray, function (err, results) {
            console.log("Employee updated");
        });
    });
    init();
}

//update and employee's manager
function updateEmployeesManager(){
    //prompt user to select an employee to update and their new manager and this information is updated in the database
    inquirer.prompt([
        {
            message: 'enter the id of the employee that needs a manager changed',
            name: 'updatee',
        },
        {
            message: 'Who is the new Manager?',
            name: 'updated',
        }
    ])
    .then((response) => {
        let tempArray = [response.updated, response.updatee];
        db.query('update employee set manager_id = ? where id = ?', tempArray, function (err, results) {
            console.log("Employee updated");
        });
    });
    init();
}

//delete info from the database
function deleteInfo() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What table do you want to delete from?',
            name: 'table',
            choices: ["department", "role", "employee"]
        },
        {
            message: "what id from the table do you want to delete?",
            name: "deleting"
        }
    ])
    .then((response) => {
        let tempArray = [response.table, parseInt(response.deleting)];
        console.log(tempArray);
        db.query('delete from ? where id = ?', tempArray, function (err, results) {
            console.log(results);
            console.log("row deleted");
        });
    });
    //init();
}

//starter function
function init() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What do you want to do?',
            name: 'firstQuestion',
            choices: ["View all departments","View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an employee role", "Update an employee's manager", "delete something from a table"]
        }
    ])
        .then((response) => {
            //call function to respond to given prompt using the switch based in first input from inquire
            switch (response.firstQuestion){
                case "View all departments":
                    viewDepartments();
                    break;
                case "View all Roles":
                    viewRoles();
                    break;
                case "View all Employees":
                    viewEmployees();
                    break;
                case "Add a Department":
                    addDepartment();
                    break;
                case "Add a Role":
                    addRole();
                    break;
                case "Add an Employee":
                    addEmployee();
                    break;
                case "Update an employee role":
                    updateEmployees();
                    break;
                case "Update an employee's manager":
                    updateEmployeesManager();
                    break;
                case "delete something from a table":
                    deleteInfo();
                    break;
                }
            }
        );
}


app.use((req, res) => {
    res.status(404).end();
});
  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    //calls the starter function
    init();
});
  