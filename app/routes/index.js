const express = require("express");
const router = express.Router();
const User = require("../models/User");

const loginGET = require("./login/get");
const loginPOST = require("./login/post");

router.use("/login", loginGET);
router.use("/login", loginPOST);

module.exports = router;
