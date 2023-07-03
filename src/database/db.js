const sql = require("mysql");

let db = sql.createConnection({
  host: "localhost",
  database: "order",
  user: "root",
  password: "password12345",
});

db.connect((err) => {
  try {
    if (err) {
      console.log(err.message);
    }
    console.log("Connected to MySQL database!");
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = { db };
