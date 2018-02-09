const express = require("express");
const sequalize = require("sequelize");
const bodyParser = require("body-parser");
const db = require("./db/models");

db.sequelize.sync();

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).send();
});

app.use("/api/authors", require("./db/routes/authors"));

app.use("/api/blogs", require("./db/routes/blogs"));

module.exports = app;