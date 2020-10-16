// login GET
var { router, path, auth, redirectFromLogin } = require("../config/router");

router.get('', redirectFromLogin, (rq, rs) => {
  rs.render('login', {
    title: "Login",
    partialsDir: [
      path.join(__dirname, '/partials'),
    ],
    header: false,
    footer: false
  })
});

module.exports = router;