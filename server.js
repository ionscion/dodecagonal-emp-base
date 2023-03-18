const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

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

db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });

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

app.get("/api/movies/join", (req, res) =>
  db.query(
    "SELECT  movies.movie_name,reviews.review FROM movies JOIN reviews ON reviews.movie_id = movies.id;",
    function (err, rows) {
      if (err) {
        console.log(err);
      }
      res.json({ message: "george", data: rows });
    }
  )
);

app.post("/api/add-movie", (req, res) =>
  db.query(
    "INSERT INTO movies (movie_name) VALUES (?)", req.body.name, 
    function (err, rows) {
      if (err) {
        console.log(err);
      }
      res.json({ message: "george", data: rows });
    }
  )
);

app.delete("/api/delete-movie", (req, res) =>
  db.query(
    "DELETE FROM movies WHERE id=?", req.body.id, 
    function (err, rows) {
      if (err) {
        console.log(err);
      }
      res.json({ message: "george", data: rows });
    }
  )
);

app.put("/api/update-review", (req, res) =>
  db.query(
    "UPDATE FROM movies WHERE id=?", req.body.id, 
    function (err, rows) {
      if (err) {
        console.log(err);
      }
      res.json({ message: "george", data: rows });
    }
  )
);

app.listen(PORT, () => {
  console.log(`Server is self-aware on port ${PORT}`);
});
