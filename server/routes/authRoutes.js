```javascript
const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

router.post('/register', authController.register);

router.post('/login', passport.authenticate('local', { session: false }), authController.login);

router.post('/logout', authController.logout);

router.get('/user', passport.authenticate('jwt', { session: false }), authController.getUser);

module.exports = router;
```