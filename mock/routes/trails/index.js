const express = require("express");

const TRAILS_RESPONSE = require("./responses/get-trails.json");
const TRAIL_DETAIL_RESPONSE = require("./responses/get-trail-detail.json");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(TRAILS_RESPONSE);
});

router.get("/detail/:trailId", (req, res) => {
  res.json(TRAIL_DETAIL_RESPONSE);
});

module.exports = router;
