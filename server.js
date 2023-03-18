const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: "root",
    password: process.env.MYSQL_PW || "",
    database: "employee_db",
  },
  console.log(`Connected to the employee database.`)
);
const mainPrompt = [
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['View all departments', 'Add a department', 'View all roles', 'Add a role', 'View all employees', 'Add an employee', 'Update an employee role']
    }
  ];
  
  const addDepartmentPrompt = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the department?'
    }
  ];
  
  const addRolePrompt = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the role?'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary for the role?'
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'What is the department ID for the role?'
    }
  ];
  
  const addEmployeePrompt = [
    {
      type: 'input',
      name: 'first_name',
      message: 'What is the employee\'s first name?'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the employee\'s last name?'
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'What is the employee\'s role ID?'
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'What is the employee\'s manager ID? (leave blank if none)'
    }
  ];
  
  const updateEmployeeRolePrompt = [
    {
      type: 'input',
      name: 'employee_id',
      message: 'What is the ID of the employee whose role you want to update?'
    },
    {
      type: 'input',
      name: 'new_role_id',
      message: 'What is the ID of the employee\'s new role?'
    }
  ];
  
  async function main() {
    const { action } = await inquirer.prompt(mainPrompt);
  
    switch (action) {
      case 'View all departments':
        viewDepartments();
        break;
    }
  };

    function viewDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        if(err) throw err;
        console.table(results);
      });
  }
  
  function viewRoles() {
    // code to view all roles
  }
  
  function viewEmployees() {
    // code to view all employees
  }
  
  function addDepartment() {
    // code to add a department
  }
  
  function addRole() {
    // code to add a role
  }
  
  function addEmployee() {
    // code to add an employee
  }
  
  function updateEmployeeRole() {
    // code to update an employee role
  }
  
  
// Query database

// db.query(`DELETE FROM favorite_books WHERE id = ?`, 2, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// // Query database
// db.query("SELECT * FROM favorite_books", function (err, results) {
//   console.log(results);
// });

// Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/index.html"))
// );

// GET Route for feedback page
app.get("/api/movies", (req, res) =>
  db.query("SELECT * FROM movies", function (err, rows) {
    if (err) {
      console.log(err);
    }
    res.json({ message: "george", data: rows });
  })
);

app.listen(PORT, () => {
  console.log(`Server is self-aware on port ${PORT}`);
});

main();
module.exports = {viewDepartments};
