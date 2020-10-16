// login GET
var { router, path, body, validationResult } = require("../config/router");


router.post('', [
  body('username').isEmail(),
  body('password').isLength({ min: 5 })
], (rq, rs) => {
  const errors = validationResult(rq);
  if (!errors.isEmpty()) {
    return rs.status(400).json({ errors: errors.array() });
  }
  console.log(rq.body.username);
});

module.exports = router;