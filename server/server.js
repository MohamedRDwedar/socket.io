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

    socket.on('createMessage', function (message) {
        console.log('New Message', message);
        io.emit('createMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getDate()
        });
    });

});

app.use(express.static(publishPath));

server.listen(port, () => {
    console.log(`Started up at port ${port}`);
});