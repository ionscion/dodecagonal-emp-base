/* 
This contains all the query strings which are used and exported to the employeeHandler class
 */

const queries = {
  selectRoles: `SELECT role.id, role.title, role.salary, department.department_name
FROM role
JOIN department ON role.department_id = department.id`,

  viewDep: `SELECT * FROM department`,

  viewEmp: `SELECT e.id, e.first_name, e.last_name, r.title, d.department_name, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager_name
FROM employee e
JOIN role r ON r.id = e.role_id
JOIN department d ON d.id = r.department_id
LEFT JOIN employee m ON m.id = e.manager_id`,

  addDep: (name) => `INSERT INTO department (department_name)
VALUES ("${name}")`,

  addNewRole: (
    title,
    salary,
    department_id
  ) => `INSERT INTO role (title, salary, department_id)
VALUES ("${title}", ${salary}, ${department_id})`,

  addEmp: (first_name, last_name, role_id, manager_id) => {
    const managerIdValue = manager_id === "" ? "NULL" : manager_id;
    return `INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES ("${first_name}", "${last_name}", ${role_id}, ${managerIdValue})`;
  },

  updateEmp: (employee_id, role_id) =>
    `UPDATE employee SET role_id = ${role_id} WHERE id = ${employee_id}`,

  viewEmpByDep: (
    department_id
  ) => `SELECT e.id, e.first_name, e.last_name, d.department_name
FROM employee e 
JOIN role r ON r.id = e.role_id
JOIN department d ON d.id = r.department_id
WHERE d.id = ${department_id}`,

  viewEmpByMgr: (
    manager_id
  ) => `SELECT CONCAT(m.first_name, ' ', m.last_name) AS Manager_Name, e.manager_id, e.first_name AS Employee_FirstName, e.last_name AS Employee_LastName
FROM employee e
LEFT JOIN employee m ON m.id = e.manager_id 
WHERE e.manager_id = ${manager_id}`,

  delEmployee: (employee_id) => `DELETE FROM employee WHERE id=${employee_id}`,

  delDepartment: (department_id) =>
    `DELETE FROM department WHERE id=${department_id}`,

  delRole: (role_id) => `DELETE FROM role WHERE id=${role_id}`,

  viewBudget: (department_id) => `SELECT d.department_name AS Dept_Name, SUM(r.salary) AS Utilized_Budget
  FROM employee e 
  JOIN role r ON r.id = e.role_id
  JOIN department d ON d.id = r.department_id
  WHERE d.id = ${department_id}
  GROUP BY d.department_name`
};

module.exports = queries;
