const express = require('express');
const postRoutes = express.Router();


// Defined store route
postRoutes.route('/add').post(function (req, res) {
  res.status(200).json({'business': 'post business in added successfully'});

});

// Defined get data(index or listing) route
postRoutes.route('/').get(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});

module.exports = postRoutes;
