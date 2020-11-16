// Requiring our models and passport as we've configured it
const db = require('../models');
const exjwt = require("express-jwt");
const authController = require('../controllers/auth.controller');



module.exports = function (app) {
  app.post('/api/login', (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  //Sign up is handles by auth contoller
  
  // Route for logging user out
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // Route for getting some data about our user to be used client side
  app.get('/api/user_data', (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });
};
