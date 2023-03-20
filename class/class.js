/* EmployeeHandler class - this is instatiated in server.js async function HandleChoice to access methods */

//importing query strings and functions from database queries.js
const {
  selectRoles,
  viewDep,
  viewEmp,
  addDep,
  addNewRole,
  addEmp,
  updateEmp,
  viewEmpByDep,
  viewEmpByMgr,
  delEmployee,
  delDepartment,
  delRole,
  viewBudget,
} = require("../db/queries");

//import inquirer prompts from prompts.js
const {
  viewEmployeeByMgrPrompt,
  viewEmployeeByDepPrompt,
  addDepartmentPrompt,
  addRolePrompt,
  addEmployeePrompt,
  updateEmployeeRolePrompt,
  deleteEmployeePrompt,
  deleteDepartmentPrompt,
  deleteRolePrompt,
  viewBudgetPrompt,
} = require("./prompts");

printLineBreaks = (num) => console.log("\n".repeat(num));

//main Employee Handler class
class EmployeeHandler {
  constructor(db, inquirer) {
    this.db = db;
    this.inquirer = inquirer;
  }
  printResults(err, results) {
    if (err) throw err;
    printLineBreaks(2);
    console.table(results);
    printLineBreaks(10);
  }

  async getDepartmentChoices() {
    const departments = await this.db.query("SELECT * FROM department");
    return departments.map((department) => ({
      name: department.department_name,
      value: department.id,
    }));
  }  

  viewDepartments() {
    this.db.query(viewDep, (err, results) => this.printResults(err, results));
  }

  viewRoles() {
    this.db.query(selectRoles, (err, results) =>
      this.printResults(err, results)
    );
  }

  viewEmployees() {
    this.db.query(viewEmp, (err, results) => this.printResults(err, results));
  }

  async addDepartment() {
    const { name } = await this.inquirer.prompt(addDepartmentPrompt);
    this.db.query(addDep(name), (err, results) =>
      this.printResults(err, results)
    );
  }

  async addRole() {
    const { title, salary, department_id } = await this.inquirer.prompt(
      addRolePrompt
    );
    const queryString = addNewRole(title, salary, department_id);
    this.db.query(queryString, (err, results) =>
      this.printResults(err, results)
    );
  }

  async addEmployee() {
    const { first_name, last_name, role_id, manager_id } =
      await this.inquirer.prompt(addEmployeePrompt);
    const queryString = addEmp(first_name, last_name, role_id, manager_id);
    this.db.query(queryString, (err, results) =>
      this.printResults(err, results)
    );
  }

  async updateEmployeeRole() {
    const { employee_id, new_role_id } = await this.inquirer.prompt(
      updateEmployeeRolePrompt
    );
    const queryString = updateEmp(employee_id, new_role_id);
    this.db.query(queryString, (err, results) =>
      this.printResults(err, results)
    );
  }

  async viewEmpDepartment() {
    const { department_id } = await this.inquirer.prompt(
      viewEmployeeByDepPrompt
    );
    const queryString = viewEmpByDep(department_id);
    this.db.query(queryString, (err, results) =>
      this.printResults(err, results)
    );
  }

  async viewEmpByManager() {
    const { manager_id } = await this.inquirer.prompt(viewEmployeeByMgrPrompt);
    const queryString = viewEmpByMgr(manager_id);
    this.db.query(queryString, (err, results) =>
      this.printResults(err, results)
    );
  }
  async deleteEmployee() {
    const { employee_id } = await this.inquirer.prompt(deleteEmployeePrompt);
    const queryString = delEmployee(employee_id);
    this.db.query(queryString, (err, results) =>
      this.printResults(err, results)
    );
  }
  async deleteDepartment() {
    const { department_id } = await this.inquirer.prompt(
      deleteDepartmentPrompt
    );
    const queryString = delDepartment(department_id);
    this.db.query(queryString, (err, results) =>
      this.printResults(err, results)
    );
  }
  async deleteRole() {
    const { role_id } = await this.inquirer.prompt(deleteRolePrompt);
    const queryString = delRole(role_id);
    this.db.query(queryString, (err, results) =>
      this.printResults(err, results)
    );
  }
  async viewTotalBudget() {
    const { department_id } = await this.inquirer.prompt(viewBudgetPrompt);
    const queryString = viewBudget(department_id);
    this.db.query(queryString, (err, results) =>
      this.printResults(err, results)
    );
  }
}

module.exports = EmployeeHandler;
