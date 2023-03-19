const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table");
const EmployeeHandler = require("./class/class");
require("dotenv").config();
process.stdin.setMaxListeners(20);

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
      "View employees by department",
      "View employees by manager",
      "Exit",
    ],
  },
];

async function handleChoice(action) {
  const employeeHandler = new EmployeeHandler(db, inquirer);
  switch (action) {
    case "View all departments":
      employeeHandler.viewDepartments();
      break;
    case "Add a department":
      await employeeHandler.addDepartment();
      break;
    case "View all roles":
      employeeHandler.viewRoles();
      break;
    case "Add a role":
      await employeeHandler.addRole();
      break;
    case "View all employees":
      employeeHandler.viewEmployees();
      break;
    case "Add an employee":
      await employeeHandler.addEmployee();
      break;
    case "Update an employee role":
      await employeeHandler.updateEmployeeRole();
      break;
    case "View employees by department":
      await employeeHandler.viewEmpDepartment();
      break;
    case "View employees by manager":
      await employeeHandler.viewEmpByManager();
      break;
    case "Exit":
      process.exit();
  }
  await main();
}

async function main() {
  const { action } = await inquirer.prompt(mainPrompt);
  await handleChoice(action);
}

(async () => {
  console.log("Welcome to Employee Manager! \n -------------------------- \n");
  await main();
})();

app.listen(PORT, () => {
  console.log(`Server is self-aware on port ${PORT}`);
});
