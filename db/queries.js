
const selectRoles = `SELECT role.id, role.title, role.salary, department.department_name
FROM role
JOIN department ON role.department_id = department.id`;

const viewDep = `SELECT * FROM department`;

const viewEmp = `SELECT e.id, e.first_name, e.last_name, r.title, d.department_name, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager_name
FROM employee e
JOIN role r ON r.id = e.role_id
JOIN department d ON d.id = r.department_id
LEFT JOIN employee m ON m.id = e.manager_id`;

const addDep= (name) => `INSERT INTO department (department_name)
VALUES ("${name}")`;

const addNewRole = (title, salary, department_id) => `INSERT INTO role (title, salary, department_id)
VALUES ("${title}", ${salary}, ${department_id})`;

const addEmp = (first_name, last_name, role_id, manager_id) => `INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("${first_name}", "${last_name}", ${role_id}, ${manager_id})`;

const updateEmp = (employee_id, role_id) => `UPDATE employee SET role_id = ${role_id} WHERE id = ${employee_id}`;

const viewEmpByDep = (department_id) => `SELECT e.id, e.first_name, e.last_name, d.department_name
FROM employee e 
JOIN role r ON r.id = e.role_id
JOIN department d ON d.id = r.department_id
WHERE d.id = ${department_id}`;

const viewEmpByMgr = (manager_id) => `SELECT CONCAT(m.first_name, ' ', m.last_name) AS Manager_Name, e.manager_id, e.first_name AS Employee_FirstName, e.last_name AS Employee_LastName
FROM employee e
LEFT JOIN employee m ON m.id = e.manager_id 
WHERE e.manager_id = ${manager_id}`;

module.exports = { selectRoles, viewDep, viewEmp, addDep, addNewRole, addEmp, updateEmp, viewEmpByDep, viewEmpByMgr};