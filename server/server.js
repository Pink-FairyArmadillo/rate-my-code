// Require Packages
const path = require('path');
const express = require('express');

// TODO: Require Routers
const loginRouter = require('./routes/login');

// Initialize Express Server
const app = express();
const PORT = 3000;

// TODO: Initialize DB connection


// Insert global parsers
app.use(express.json());

// Serve Static Files
app.use(express.static(path.resolve(__dirname, '../dist/index.html')));
app.use(express.static(path.resolve(__dirname, '../dist')));

// TODO: Direct to Routers
app.use('/login', loginRouter);


/* Handle Client Side React-Router Routes */
// Have an array hold our react routes as strings
const reactRouterPaths = ['/postview', '/feed', '/createPost', '/landing'];
// Have our server(app) check for the react routes and serve our static files
app.use(reactRouterPaths, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
})

// Global 404 catch for bad route requests
app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});


// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };

  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start server with message
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;