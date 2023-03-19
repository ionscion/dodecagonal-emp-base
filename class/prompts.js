const prompts = {
  viewEmployeeByDepPrompt: [
    {
      type: "input",
      name: "department_id",
      message: "Enter Department ID to view current list of employees",
    },
  ],

  viewEmployeeByMgrPrompt: [
    {
      type: "input",
      name: "manager_id",
      message: "Enter Manager ID to view current list of employees",
    },
  ],
  addDepartmentPrompt: [
    {
      type: "input",
      name: "name",
      message: "What is the name of the department?",
    },
  ],

  addRolePrompt: [
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
  ],

  addEmployeePrompt: [
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
  ],

  updateEmployeeRolePrompt: [
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
  ],
};
module.exports = prompts;
