const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const list = require("./routes/ListRoutes");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", list);
module.exports = app;
