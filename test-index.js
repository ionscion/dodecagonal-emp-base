const inquirer = require('inquirer');
const {viewDepartments} = require("./server");
// const { viewDepartments, addDepartment, viewAllRoles, addRole, viewAllEmployees, addEmployee, updateEmployeeRole } = require("./server");
const mainPrompt = [
  {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: ['View all departments', 'Add a department', 'View all roles', 'Add a role', 'View all employees', 'Add an employee', 'Update an employee role']
  }
];

const addDepartmentPrompt = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the department?'
  }
];

const addRolePrompt = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the role?'
  },
  {
    type: 'input',
    name: 'salary',
    message: 'What is the salary for the role?'
  },
  {
    type: 'input',
    name: 'department_id',
    message: 'What is the department ID for the role?'
  }
];

const addEmployeePrompt = [
  {
    type: 'input',
    name: 'first_name',
    message: 'What is the employee\'s first name?'
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'What is the employee\'s last name?'
  },
  {
    type: 'input',
    name: 'role_id',
    message: 'What is the employee\'s role ID?'
  },
  {
    type: 'input',
    name: 'manager_id',
    message: 'What is the employee\'s manager ID? (leave blank if none)'
  }
];

const updateEmployeeRolePrompt = [
  {
    type: 'input',
    name: 'employee_id',
    message: 'What is the ID of the employee whose role you want to update?'
  },
  {
    type: 'input',
    name: 'new_role_id',
    message: 'What is the ID of the employee\'s new role?'
  }
];

async function main() {
  const { action } = await inquirer.prompt(mainPrompt);

  switch (action) {
    case 'View all departments':
      viewDepartments();
      break;
  }
};

main();

