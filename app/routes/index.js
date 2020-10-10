const express = require("express");
const router = express.Router();
const path = require("path");

// @desc login page
router.get('/', (rq, rs) => {
	rs.render('login', {
		title: "Login",
		partialsDir: [
			path.join(__dirname, 'partials'),
		],
		header: false,
		footer: true
	});
})

module.exports = router;