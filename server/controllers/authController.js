```javascript
const passport = require('passport');
const User = require('../models/User');

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.status(400).json(info); }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      return res.status(200).json({ user });
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logged out successfully' });
};

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email });
  await User.register(user, password);
  res.status(200).json({ message: 'Registered successfully' });
};

exports.authenticateOAuth = (strategy) => {
  return passport.authenticate(strategy, { scope: ['profile', 'email'] });
};

exports.authenticateOAuthCallback = (strategy) => {
  return passport.authenticate(strategy, { failureRedirect: '/login' });
};

exports.redirectOAuth = (req, res) => {
  res.redirect('/');
};
```