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
      user: 'root',
      //process.env.DB_PASSWORD
      password: 'passybears',
      database: 'employees_db'
    },
    console.log(`Connected to the classlist_db database.`)
);

//functions to respond to input
function viewDepartments(){
    //querry to view formatted table showing the department names and department ids
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
    });
}

function viewRoles(){
    //querry to view job title, role id, the department that role belongs to and the salary of the employee
    db.query('SELECT * FROM role', function (err, results) {
        console.log(results);
    });
}

function viewEmployees(){
    //querry to view formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    //SELECT * FROM employee JOIN role USING (role_id)
    //SELECT * from employee join role_id on employee.role_id = role.id
    db.query('SELECT * from employee join role_id using (role.id)', function (err, results) {
        console.log(results);
    });
}

function addDepartment(){
    //prompt user to enter the name of the department and that department is added to the database
    console.log("you are here");
    db.query('SELECT * FROM role', function (err, results) {
        console.log(results);
    });
}

function addRole(){
    //prompt user to enter the name, salary, and department for the role and that role is added to the database
}

function addEmployee(){
    //prompt user to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
}

function updateEmployees(){
    //prompt user to select an employee to update and their new role and this information is updated in the database 
}

//starter function
function init() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What do you want to do?',
            name: 'firstQuestion',
            choices: ["View all departments","View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an employee role"]
        }
    ])
        .then((response) => {
            //call function to respond to given prompt using the switch based in first input from inquire
            switch (response.firstQuestion){
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
                case "View all departments":
                    viewDepartments();
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
  