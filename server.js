const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");

const app = express();

const people = require("./routes/people");

const port = process.env.PORT || 3800;
app.use(favicon(path.join(__dirname, "Dist/favicon.ico")));
app.use(express.static(path.join(__dirname, "Dist")));
app.use("/api/people", people);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "Dist/index.html"));
});

app.listen(port);
console.log("Listening on port: " + port);

module.exports = app;
