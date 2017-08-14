const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publishPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.on('disconnect', () => {
        console.log('client disconnected from server');
    });

    socket.emit('newEmail', {
        from: 'mohamed refat',
        text: 'hi whats going on',
        createdAt: 123
    });

    socket.emit('newMessage', {
        from: 'waleed hassan',
        text: 'hi whats going on',
        createdAt: 123
    });

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail);
    });

});

app.use(express.static(publishPath));

server.listen(port, () => {
    console.log(`Started up at port ${port}`);
});