const express = require("express");
const { db } = require("./database/db");
const routes = require("./route/routes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server start");
});
