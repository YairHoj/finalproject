const express = require("express");
const app = express();
const knex = require("knex");
const { Client } = require("pg");
const cors = require("cors");
const client = new Client({
  host: "localhost",
  user: "postgres",
  password: process.env.DATABASE_PASS,
  database: "FinalProject",
  port: 5432,
});
require("dotenv").config();

console.log(process.env);

app.use(cors());

client.connect();

app.listen(3001, () => {
  console.log(`Server listening on 3001`);
});

app.get("/postdata", (req, res) => {
  client.query(`Select * from postdata`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      console.log(err);
    }
    client.end;
  });
});

app.get("/postdata/:id", (req, res) => {
  client.query(
    `Select * from postdata where postid=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      } else {
        console.log(err);
      }
    }
  );
  client.end;
});

// app.set("db", db);

// app.get("/", (req, res) => {
//   res.render("hello");
// });
