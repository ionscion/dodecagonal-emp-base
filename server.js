const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table");
const { selectRoles, viewDep, viewEmp, addDep } = require("./db/queries");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// index.js

// Connect to database
const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: "root",
    password: process.env.MYSQL_PW,
    database: "employee_db",
  },
  console.log(`Connected to the employee database.`)
);
const mainPrompt = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "Add a department",
      "View all roles",
      "Add a role",
      "View all employees",
      "Add an employee",
      "Update an employee role",
    ],
  },
];

const addDepartmentPrompt = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the department?",
  },
];

const addRolePrompt = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the role?",
  },
  {
    type: "input",
    name: "salary",
    message: "What is the salary for the role?",
  },
  {
    type: "input",
    name: "department_id",
    message: "What is the department ID for the role?",
  },
];

const addEmployeePrompt = [
  {
    type: "input",
    name: "first_name",
    message: "What is the employee's first name?",
  },
  {
    type: "input",
    name: "last_name",
    message: "What is the employee's last name?",
  },
  {
    type: "input",
    name: "role_id",
    message: "What is the employee's role ID?",
  },
  {
    type: "input",
    name: "manager_id",
    message: "What is the employee's manager ID? (leave blank if none)",
  },
];

const updateEmployeeRolePrompt = [
  {
    type: "input",
    name: "employee_id",
    message: "What is the ID of the employee whose role you want to update?",
  },
  {
    type: "input",
    name: "new_role_id",
    message: "What is the ID of the employee's new role?",
  },
];

async function main() {
  let exit = false;

  while (!exit) {
    const { action } = await inquirer.prompt(mainPrompt);

    switch (action) {
      case "View all departments":
        viewDepartments();
        break;
      case "Add a department":
        addDepartment();
        break;
      case "View all roles":
        viewRoles();
        break;
      case "Add a role":
        addRole();
        break;
      case "View all employees":
        viewEmployees();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Update an employee role":
        updateEmployeeRole();
        break;
      case "Back":
        exit = true;
        break;
    }
  }
}

function viewDepartments() {
  db.query(viewDep, function (err, results) {
    if (err) throw err;
    console.log("\n");
    console.table(results);
  });
}

function viewRoles() {
  db.query(selectRoles, function (err, results) {
    if (err) throw err;
    console.log("\n");
    console.table(results);
  });
}

function viewEmployees() {
  db.query(viewEmp, function (err, results) {
    if (err) throw err;
    console.log("\n");
    console.table(results);
  });
}

// async function addDepartment() {
//   const { name } = await inquirer.prompt(addDepartmentPrompt);
//   console.log(`\n You entered: ${name}`);
//   db.query(
//     `INSERT INTO department (department_name)
//   VALUES ("${name}")`,
//     function (err, results) {
//       if (err) throw err;
//       console.log("\n");
//       console.table(results);
//       main();
//     }
//   );
// }

async function addDepartment() {
    const { name } = await inquirer.prompt(addDepartmentPrompt);
    console.log(`\n You entered: ${name}`);
    db.query(addDep(name), function (err, results) {
      if (err) throw err;
      console.log("\n");
      console.table(results);
      main();
    });
  }

//need to change this from department_id to dept name
async function addRole() {
  const { title, salary, department_id } = await inquirer.prompt(addRolePrompt);
  db.query(`INSERT INTO role (title, salary, department_id)
  VALUES ("${title}", ${salary}, ${department_id})`, function (err, results) {
    if (err) throw err;
    console.log("\n");
    console.table(results);
    main();
  });
}

function addEmployee() {
  // code to add an employee
}

function updateEmployeeRole() {
  // code to update an employee role
}

app.listen(PORT, () => {
  console.log(`Server is self-aware on port ${PORT}`);
});

main();
