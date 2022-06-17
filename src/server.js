'use strict';

const express = require('express');
const serverless = require('serverless-http');



const bodyParser = require('body-parser');
const cors = require('cors');
const postRoute = require('./routes.js');

let numberUser = 0;



const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(cors());

const router = express.Router();

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


router.get('/',(req,res) =>{
    res.json({
      'pelsoft': 'Hi from pelsoft netlify deployd'
    });
});

http.listen(5000, () => {
  console.log('catu chat server started on port 5000');
  console.log('For check -> http://localhost:5000/messages/')
  console.log('For check -> http://localhost:5000/.netlify/functions/api')

});

app.use('/.netlify/functions/api', router);  // path must route to lambda
module.exports = app;

module.exports.handler = serverless(app);
