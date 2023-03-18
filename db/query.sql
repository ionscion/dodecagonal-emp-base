
--THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

-- view all departments 
--THEN I am presented with a formatted table showing department names and department ids
SELECT * FROM department;

-- view all roles 
--THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
SELECT role.id, role.title, role.salary, department.department_name
FROM role
JOIN department ON role.department_id = department.id;

-- view all employees 
--THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
SELECT e.id, e.first_name, e.last_name, r.title, d.department_name, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager_name
FROM employee e
JOIN role r ON r.id = e.role_id
JOIN department d ON d.id = r.department_id
LEFT JOIN employee m ON m.id = e.manager_id;

-- add a department
--THEN I am prompted to enter the name of the department and that department is added to the database
INSERT INTO department (department_name)
VALUES ();
-- add a role 
--THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
INSERT INTO role (title, salary, department_id)
VALUES ();

-- add an employee
--THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ();
-- update employee role
--THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
UPDATE employee SET role_id =  WHERE id = ;


