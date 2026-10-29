const express = require("express");
const { SHOP_ITEMS } = require("../../state");

const router = express.Router();

router.get("/items", (req, res) => {
  res.json({
    items: SHOP_ITEMS,
    pagination: { limit: SHOP_ITEMS.length, offset: 0, total: SHOP_ITEMS.length },
  });
});

module.exports = router;
