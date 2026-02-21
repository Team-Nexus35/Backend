const express = require("express");
const router = express.Router();

const { match } = require("../controllers/matchController");
const { authenticate } = require("../middlewares/authMiddleware");

router.post("/match", authenticate, match);

module.exports = router;