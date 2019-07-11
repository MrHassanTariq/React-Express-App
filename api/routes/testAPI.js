const express = require("express");
const router = express.Router();

router.get("/", async function(req, res, next) {
  res.send("API is woprking");
});

module.exports = router;
