const express = require("express");
const {
  handleUrl,
  getHandleId,
  getHandleAnalytics,
} = require("../controllers/urlController");

const router = express.Router();

router.post("/", handleUrl);

router.get("/gem/:id", getHandleId);

router.get("/analytics/:id", getHandleAnalytics);

module.exports = router;
