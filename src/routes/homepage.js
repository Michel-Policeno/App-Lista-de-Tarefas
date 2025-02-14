const express = require("express");
const router = express.Router();
const path = require("node:path");

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/homepage.html"));
});

module.exports = router;
