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
  
const {viewEmployeeByMgrPrompt}  = require("./prompts");


class EmployeeHandler {
    constructor(db, inquirer) {
      this.db = db;
      this.inquirer = inquirer
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
      const { department_id } = await this.inquirer.prompt(viewEmployeeByDepPrompt);
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