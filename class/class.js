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
} = require("../db/queries");

const {
  viewEmployeeByMgrPrompt,
  viewEmployeeByDepPrompt,
  addDepartmentPrompt,
  addRolePrompt,
  addEmployeePrompt,
  updateEmployeeRolePrompt,
} = require("./prompts");

class EmployeeHandler {
  constructor(db, inquirer) {
    this.db = db;
    this.inquirer = inquirer;
  }
  viewDepartments() {
    this.db.query(viewDep, function (err, results) {
      if (err) throw err;
      console.log("\n");
      console.table(results);
      console.log("\n\n\n\n\n\n\n\n\n");
    });
  }

  viewRoles() {
    this.db.query(selectRoles, function (err, results) {
      if (err) throw err;
      console.log("\n");
      console.table(results);
      console.log("\n\n\n\n\n\n\n\n\n");
    });
  }

 viewEmployees() {
    this.db.query(viewEmp, function (err, results) {
      if (err) throw err;
      console.log("\n");
      console.table(results);
      console.log("\n\n\n\n\n\n\n\n\n");
    });
  }

  async addDepartment() {
    const { name } = await this.inquirer.prompt(addDepartmentPrompt);
    this.db.query(addDep(name), function (err, results) {
      if (err) throw err;
      console.log("\n");
      console.table(results);
      console.log("\n\n\n\n\n\n\n\n\n");
    });
  }

  async addRole() {
    const { title, salary, department_id } = await this.inquirer.prompt(addRolePrompt);
    const queryString = addNewRole(title, salary, department_id);
    this.db.query(queryString, function (err, results) {
      if (err) throw err;
      console.log("\n");
      console.table(results);
      console.log("\n\n\n\n\n\n\n\n\n");
    });
  }

  async addEmployee() {
    const { first_name, last_name, role_id, manager_id } = await this.inquirer.prompt(
      addEmployeePrompt
    );
    const queryString = addEmp(first_name, last_name, role_id, manager_id);
    this.db.query(queryString, function (err, results) {
      if (err) throw err;
      console.log("\n");
      console.table(results);
      console.log("\n\n\n\n\n\n\n\n\n");
    });
  }

  async updateEmployeeRole() {
    const { employee_id, new_role_id } = await this.inquirer.prompt(
      updateEmployeeRolePrompt
    );
    const queryString = updateEmp(employee_id, new_role_id);
    this.db.query(queryString, function (err, results) {
      if (err) throw err;
      console.log("\n");
      console.table(results);
      console.log("\n\n\n\n\n\n\n\n\n");
    });
  }

  async viewEmpDepartment() {
    const { department_id } = await this.inquirer.prompt(
      viewEmployeeByDepPrompt
    );
    const queryString = viewEmpByDep(department_id);
    this.db.query(queryString, function (err, results) {
      if (err) throw err;
      console.log("\n");
      console.table(results);
      console.log("\n\n\n\n\n\n\n\n\n");
    });
  }

  async viewEmpByManager() {
    const { manager_id } = await this.inquirer.prompt(viewEmployeeByMgrPrompt);
    const queryString = viewEmpByMgr(manager_id);
    this.db.query(queryString, function (err, results) {
      if (err) throw err;
      console.log("\n");
      console.table(results);
      console.log("\n\n\n\n\n\n\n\n\n");
    });
  }
}

module.exports = EmployeeHandler;
