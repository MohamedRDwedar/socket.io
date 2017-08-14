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

    socket.emit('welcomeChat', {
        from: 'admin',
        text: 'welcome to the chat',
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('userJoined', {
        from: 'admin',
        text: 'new user joined to the chat',
        createdAt: new Date().getTime()
    });

    socket.on('disconnect', () => {
        console.log('client disconnected from server');
    });

    socket.on('createMessage', function (message) {
        console.log('New Message', message);
        io.emit('createMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getDate()
        });

        // socket.broadcast.emit('createMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });

});

app.use(express.static(publishPath));

server.listen(port, () => {
    console.log(`Started up at port ${port}`);
});