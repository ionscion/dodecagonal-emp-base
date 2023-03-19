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
} = require("../db/queries");

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
} = require("./prompts");

printLineBreaks = (num) => console.log("\n".repeat(num));

class EmployeeHandler {
  constructor(db, inquirer) {
    this.db = db;
    this.inquirer = inquirer;
  }
  viewDepartments() {
    this.db.query(viewDep, function (err, results) {
      if (err) throw err;
      printLineBreaks(2);
      console.table(results);
      printLineBreaks(10);
    });
  }

  viewRoles() {
    this.db.query(selectRoles, function (err, results) {
      if (err) throw err;
      printLineBreaks(2);
      console.table(results);
      printLineBreaks(10);
    });
  }

  viewEmployees() {
    this.db.query(viewEmp, function (err, results) {
      if (err) throw err;
      printLineBreaks(2);
      console.table(results);
      printLineBreaks(10);
    });
  }

  async addDepartment() {
    const { name } = await this.inquirer.prompt(addDepartmentPrompt);
    this.db.query(addDep(name), function (err, results) {
      if (err) throw err;
      printLineBreaks(2);
      console.table(results);
      printLineBreaks(10);
    });
  }

  async addRole() {
    const { title, salary, department_id } = await this.inquirer.prompt(
      addRolePrompt
    );
    const queryString = addNewRole(title, salary, department_id);
    this.db.query(queryString, function (err, results) {
      if (err) throw err;
      printLineBreaks(2);
      console.table(results);
      printLineBreaks(10);
    });
  }

  async addEmployee() {
    const { first_name, last_name, role_id, manager_id } =
      await this.inquirer.prompt(addEmployeePrompt);
    const queryString = addEmp(first_name, last_name, role_id, manager_id);
    this.db.query(queryString, function (err, results) {
      if (err) throw err;
      printLineBreaks(2);
      console.table(results);
      printLineBreaks(10);
    });
  }

  async updateEmployeeRole() {
    const { employee_id, new_role_id } = await this.inquirer.prompt(
      updateEmployeeRolePrompt
    );
    const queryString = updateEmp(employee_id, new_role_id);
    this.db.query(queryString, function (err, results) {
      if (err) throw err;
      printLineBreaks(2);
      console.table(results);
      printLineBreaks(10);
    });
  }

  async viewEmpDepartment() {
    const { department_id } = await this.inquirer.prompt(
      viewEmployeeByDepPrompt
    );
    const queryString = viewEmpByDep(department_id);
    this.db.query(queryString, function (err, results) {
      if (err) throw err;
      printLineBreaks(2);
      console.table(results);
      printLineBreaks(10);
    });
  }

  async viewEmpByManager() {
    const { manager_id } = await this.inquirer.prompt(viewEmployeeByMgrPrompt);
    const queryString = viewEmpByMgr(manager_id);
    this.db.query(queryString, function (err, results) {
      if (err) throw err;
      printLineBreaks(2);
      console.table(results);
      printLineBreaks(10);
    });
  }
  async deleteEmployee() {
    const { employee_id } = await this.inquirer.prompt(deleteEmployeePrompt);
    const queryString = delEmployee(employee_id);
    this.db.query(queryString, function (err, results) {
      if (err) throw err;
      printLineBreaks(2);
      console.table(results);
      printLineBreaks(10);
    });
  }
  async deleteDepartment() {
    const { department_id } = await this.inquirer.prompt(
      deleteDepartmentPrompt
    );
    const queryString = delDepartment(department_id);
    this.db.query(queryString, function (err, results) {
      if (err) throw err;
      printLineBreaks(2);
      console.table(results);
      printLineBreaks(10);
    });
  }
  async deleteRole() {
    const { role_id } = await this.inquirer.prompt(deleteRolePrompt);
    const queryString = delRole(role_id);
    this.db.query(queryString, function (err, results) {
      if (err) throw err;
      printLineBreaks(2);
      console.table(results);
      printLineBreaks(10);
    });
  }
}

module.exports = EmployeeHandler;
