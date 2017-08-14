 var socket = io();

 socket.on('connect', function () {

     console.log('connected to server');

    //  socket.emit('createEmail', {
    //      from: 'mohamed refat',
    //      text: 'hi whats going on',
    //      createdAt: 123
    //  });

 });

 socket.on('disconnect', function () {
     console.log('disconnected from server');
 });

 socket.on('createMessage', function (message) {
     console.log('Create Message', message);
 });

