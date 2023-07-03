const { data } = require("../data");
const { db } = require("../database/db");

const insertData = async (req, res) => {
  try {
    for (const item of data) {
      const { title, description, createdAt } = item;
      const query = `INSERT INTO orders (title, description, createdAt) VALUES (?, ?, ?)`;

      db.query(query, [title, description, createdAt], (error, results) => {
        if (error) {
          throw error;
        }
        console.log(`Inserted row with ID ${results.insertId}`);
      });
    }

    return res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getDataInPastWeek = async (req, res) => {
  try {
    const query = "SELECT * FROM orders WHERE createdAt >= ?";
    const today = new Date();
    const weekAgo = new Date();
    weekAgo.setDate(today.getDate() - 7);

    db.query(query, [weekAgo], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json({ data: results });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { insertData, getDataInPastWeek };
