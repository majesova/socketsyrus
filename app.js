var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
    console.log('a user connected');
    
    
    //Lo que recibe a través de un send es esta onda
    socket.on('message', function (data) {
        
        console.log("send:" + data);
        socket.send(data);
        
      });


  });



http.listen(3000, function(){
  console.log('listening on *:3000');
});
