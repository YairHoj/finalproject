const express = require("express");
const app = express();
const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "1234",
    database: "",
    port: 5432,
  },
});
app.set("db", db);

app.listen(3001, () => {
  console.log(`Server listening on 3001`);
});

app.get("/", (req, res) => {
  res.render("hello");
});
