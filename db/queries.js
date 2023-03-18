let name;
const selectRoles = `SELECT role.id, role.title, role.salary, department.department_name
FROM role
JOIN department ON role.department_id = department.id`;

const viewDep = `SELECT * FROM department`;

const viewEmp = `SELECT e.id, e.first_name, e.last_name, r.title, d.department_name, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager_name
FROM employee e
JOIN role r ON r.id = e.role_id
JOIN department d ON d.id = r.department_id
LEFT JOIN employee m ON m.id = e.manager_id`;

const addDep = `INSERT INTO department (department_name)
VALUES ("${name}");`

module.exports = { selectRoles, viewDep, viewEmp, addDep};