
--THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

-- view all departments 
--THEN I am presented with a formatted table showing department names and department ids

-- view all roles 
--THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

-- view all employees 
--THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
SELECT e.id, e.first_name, e.last_name, r.title, d.department_name, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager_name
FROM employee e
JOIN role r ON r.id = e.role_id
JOIN department d ON d.id = r.department_id
LEFT JOIN employee m ON m.id = e.manager_id;

-- add a department
--THEN I am prompted to enter the name of the department and that department is added to the database


-- add a role 
--THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database


-- add an employee
--THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database


-- update employee role
--THEN I am prompted to select an employee to update and their new role and this information is updated in the database 




-- extra 
-- this query will show list of all employees, role title and salary and their manager
-- this is also similar but doesn't use Alias
SELECT employee.first_name, employee.last_name, role.title, department.department_name, role.salary, employee.manager_id 
FROM employee 
JOIN role ON role.id = employee.role_id
JOIN department ON department.id = role.department_id;


