const express = require("express");
const router = express.Router();

const { submitReadiness } = require("../controllers/readinessController");
const { validateReadiness } = require("../validators/readinessValidator");
const { authenticate } = require("../middlewares/authMiddleware");

router.post("/", authenticate, validateReadiness, submitReadiness);

module.exports = router;