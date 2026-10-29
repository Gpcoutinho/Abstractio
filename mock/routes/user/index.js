const express = require("express");
const { state, SHOP_ITEMS } = require("../../state");

const TRAIL_PROGRESS_RESPONSE = require("./responses/get-user-trail-progress.json");
const MISSION_PROGRESS_RESPONSE = require("./responses/get-mission-progress.json");

const router = express.Router();

router.post("/", (req, res) => {
  const { name, gender } = req.body || {};
  if (name) state.user.name = name;
  if (gender) state.user.gender = gender;
  res.json(state.user);
});

router.patch("/", (req, res) => {
  const { name, gender } = req.body || {};
  if (name) state.user.name = name;
  if (gender) state.user.gender = gender;
  res.json(state.user);
});

router.get("/", (req, res) => {
  res.json(state.user);
});

router.get("/balance", (req, res) => {
  res.json({
    raw: String(state.shellBalance),
    formatted: `${state.shellBalance} conchas`,
    currency: "conchas",
  });
});

router.get("/inventory", (req, res) => {
  res.json({ items: state.inventory });
});

router.post("/inventory", (req, res) => {
  const { itemId } = req.body || {};
  const item = SHOP_ITEMS.find((i) => i.id === itemId);

  if (!item) {
    return res.status(404).json({ error: "Item não encontrado" });
  }

  state.shellBalance -= item.priceShells;

  const inventoryEntry = {
    inventoryId: state.nextInventoryId++,
    item,
    shellBalance: state.shellBalance,
    acquiredAt: new Date().toISOString(),
  };

  state.inventory.push(inventoryEntry);

  res.json(inventoryEntry);
});

router.patch("/avatar/active", (req, res) => {
  const { slot, itemId } = req.body || {};
  const numericItemId = itemId != null ? Number(itemId) : null;

  if (slot === "frame") state.user.activeFrame = numericItemId;
  if (slot === "accessory") state.user.activeAccessory = numericItemId;
  if (slot === "color") state.user.activeColor = numericItemId;

  res.json({
    avatarIdx: state.user.avatarIdx,
    activeFrame: state.user.activeFrame,
    activeAccessory: state.user.activeAccessory,
    activeColor: state.user.activeColor,
  });
});

router.get("/trails/:trailId/progress", (req, res) => {
  res.json(TRAIL_PROGRESS_RESPONSE);
});

router.get("/missions/:slug/progress", (req, res) => {
  res.json(MISSION_PROGRESS_RESPONSE);
});

module.exports = router;
