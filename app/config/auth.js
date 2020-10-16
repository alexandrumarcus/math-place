function auth(rq, rs, next) {
  if (!rq.user) {
    rs.render('login');
  } else {
    next();
  }
}

function redirectFromLogin(rq, rs, next) {
  if(rq.user) {
    rs.render('home');
  } else {
    next();
  }
}

module.exports = {
  auth: auth,
  redirectFromLogin: redirectFromLogin
}