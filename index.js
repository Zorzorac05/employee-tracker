//needed requires
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();

//connect to sql
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'employees_db'
    },
    console.log(`Connected to the classlist_db database.`)
);

//functions to respond to input
function viewRoles(){
    console.log(1);
}

function viewEmployees(){
    console.log(2);
}

function addDepartment(){
    
}

function addRole(){
    
}

function addEmployee(){
    
}

function updateEmployees(){
    
}

//starter function
function init() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What do you want to do?',
            name: 'firstQuestion',
            choices: ["View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an employee role"]
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
                }
            }
        );
}
//calls the starter function
init();   