 var socket = io();

 socket.on('connect', () => {
     console.log('connected to server');
     //  socket.emit('createEmail', {
     //      from: 'mohamed refat',
     //      text: 'hi whats going on',
     //      createdAt: 123
     //  });

     socket.on('welcomeChat', (message) => {
         console.log('Welcome Chat', message);       
     });

 });

 socket.on('userJoined', (message) => {
     console.log('User Joined', message);
 });

 socket.on('createMessage', (message) => {
     console.log('Create Message', message);
 });

 socket.on('disconnect', () => {
     console.log('disconnected from server');
 });