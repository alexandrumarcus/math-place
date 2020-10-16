const express = require("express");
const router = express.Router();
const { auth, redirectFromLogin } = require("../../config/auth");
const path = require("path");
const { body, validationResult } = require('express-validator');


module.exports = {
  router: router,
  auth: auth,
  path: path,
  redirectFromLogin: redirectFromLogin,
  body: body,
  validationResult: validationResult
}