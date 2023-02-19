var express = require("express");
var router = express.Router();
var os = require("os");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(
    res.json({
      hostname: os.hostname(),
      type: os.type(),
      platform: os.platform(),
    })
  );
});
router.get("/cpus", function (req, res, next) {
  res.send(
    res.json({
      hostname: os.cpus(),
    })
  );
});
router.get("/cpus/:cpusId", function (req, res, next) {
  res.send(
    res.json({
      hostname: os.cpus()[parseInt(req.params.cpusId)],
    })
  );
});

module.exports = router;
/* */
