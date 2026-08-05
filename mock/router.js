const express = require("express");

const userRouter = require("./routes/user");
const trailsRouter = require("./routes/trails");
const missionsRouter = require("./routes/missions");
const shopRouter = require("./routes/shop");
const healthRouter = require("./routes/health");

const router = express.Router();

router.use("/api/v1/user", userRouter);
router.use("/api/v1/trails", trailsRouter);
router.use("/api/v1/missions", missionsRouter);
router.use("/api/v1/shop", shopRouter);
router.use("/health", healthRouter);

module.exports = router;
