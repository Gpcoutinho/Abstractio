const SHOP_ITEMS = require("./routes/shop/responses/get-shop-items.json");

const state = {
  user: {
    id: "dummy-user-1",
    name: "Appa Nauta",
    gender: "male",
    missionsCompleted: 0,
    totalMissions: 29,
    rank: { level: 1, patent: "Polvinho" },
    avatarIdx: 0,
    avatarsUnlocked: 1,
    activeFrame: null,
    activeAccessory: null,
    activeColor: null,
  },
  shellBalance: 0,
  inventory: [],
  nextInventoryId: 1,
  // attemptNumber por questionSlug, pra incrementar entre tentativas erradas
  attemptsByQuestion: {},
};

module.exports = { state, SHOP_ITEMS };
