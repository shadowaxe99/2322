Certainly! Let's start by creating a token-based authentication system for a server using Express.js, JWT, and the above mentioned functions.

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const { hashPassword, comparePassword, generateToken } = require('./yourFileName'); // replace "yourFileName" with your actual filename.

const app = express();

// Mock user database for demo purpose
const users = [
  {
    id: 1,
    username: "Dr.AIVirtuoso",
    password: hashPassword("TopSecretPassword"),
    token: generateToken(20)
  }
];

// POST /login endpoint to authenticate user 
app.post('/login', (req, res) => {
  const user = users.find(user => user.username === req.body.username);
  if (user == null) {
    return res.status(400).send('Cannot find user');
  }
  try {
    if(comparePassword(req.body.password, user.password)) {
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      res.json({ accessToken: accessToken });
    } else {
      res.send('Not Allowed');
    }
  } catch {
    res.status(500).send();
  }
});

// Middleware to authenticate token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) return res.sendStatus(401); // if there isn't any token
  
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next(); // pass the execution off to whatever request the client intended
  });
}

// Can be split into individual routers if needed
// All secured routes goes here
app.get('/profile', authenticateToken, (req, res) => {
  res.json({message: "secret message"});
});

app.listen(3000);
```
To run the above script, a .env file containing a secret for jwt (i.e., `ACCESS_TOKEN_SECRET=my_s3cr3t`) should be created at the root of your project, which will be used to sign the JWT.

You can further extend this code to fit your needs and implement modules or libraries according to your project's requirements. Remember to keep the above standards in doing so.