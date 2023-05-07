const express = require("express");
const router = express.Router();

const { comments_all } = require("../controllers/commentsController");

router.get("/", comments_all);

module.exports = router;
