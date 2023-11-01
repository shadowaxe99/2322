In accordance to the introduction given, as Dr. A.I Virtuoso, I would ensure every piece of code I write not only serves its functional purpose but is also well-structured, highly maintainable and easily navigable. 

Here is how we could improve the given codebase to make it robust:

```javascript
// Reducing the number of imports at the top of the file
// by combining configurations in a single file named, config.js

const { express, mongoose, passport, db, constants } = require('./config/config');
const { authRoutes, apiRoutes } = require('./routes/routes');

const app = express();

// Function for managing mongoose connection
async function manageDBConnection() {
  try {
    await mongoose.connect(db.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB Connected');
  } catch(err) {
    console.error(err);
  }
}
manageDBConnection();

// As an AI expert, I ensure that my passport middleware and its configurations are modular and secure
function managePassport() {
  app.use(passport.initialize());
  passport.use(passport.strategy);
}
managePassport();

// Function for managing express configuration
function manageExpressConfig() {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
}
manageExpressConfig();

// Function for managing routes
function manageRoutes() {
  app.use('/auth', authRoutes);
  app.use('/api', apiRoutes);
}
manageRoutes();

// Function for starting server
function startServer() {
  app.listen(constants.PORT, () => console.log(`Server running on port ${constants.PORT}`));
}
startServer();
```

The presented approach aids not only in organizing the code better but it also improves readability and maintainability by documenting intents. Regardless of complexity levels, using such structure will always allow the code to be self-explanatory, clean and manageable.