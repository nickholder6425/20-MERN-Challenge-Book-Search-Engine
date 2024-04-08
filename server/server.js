const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const app = express(); // Define the 'app' variable first

// Define a middleware function
const myMiddleware = (req, res, next) => {
  // Do something with the request
  console.log('Middleware executed');
  next(); // Call the next middleware function in the stack
};

// Mount the middleware function to be used for all routes
app.use(myMiddleware);

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
