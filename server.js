const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");

const app = express();

const people = require("./routes/people");

app.use(favicon(path.join(__dirname, "Dist/favicon.ico")));
app.use(express.static(path.join(__dirname, "Dist")));
app.use("/api/people", people);

app.get("*/", function (req, res) {
  res.sendFile(path.join(__dirname, "Dist/index.html"));
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"));

console.log("Listening on port: " + app.get("port"));

module.exports = app;
