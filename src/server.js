'use strict';
const postRoute = require('./routes.js');

let numberUser = 0;

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const cors = require('cors');
const serverless = require('serverless-http');
const express = require('express');
const router = express.Router();


app.use(cors());
app.use('/.netlify/functions/server', router);  // path must route to lambda

app.use('/messages', postRoute);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
io.on('connection', (socket) => {
  console.log('user connected');
 
        
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  socket.on('add-message', (message) => {
    console.log(message);
    io.emit('message', {type:'new-message', text: message});    
  });
});

http.listen(5000, () => {
  console.log('catu chat server started on port 5000');
  console.log('For check -> http://localhost:5000/messages/')

});
module.exports = app;

module.exports.handler = serverless(app);
