const express = require("express");
const london = require("../app/peoplenames.js");
const router = express.Router();

router.route("/").get(function (req, res) {
  london.getAllPeople().then((people) => {
    res.send(people);
  });
});

module.exports = router;
