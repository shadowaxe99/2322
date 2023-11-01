```javascript
const express = require('express');
const mongoose = require('mongoose');
const passport = require('./config/passport');
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');
const db = require('./config/db');
const constants = require('./utils/constants');

const app = express();

// Connect to MongoDB
mongoose.connect(db.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
passport.use(passport.strategy);

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Start server
app.listen(constants.PORT, () => console.log(`Server running on port ${constants.PORT}`));
```