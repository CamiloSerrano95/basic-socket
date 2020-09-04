const { io } = require('../server');

io.on('connection', (client) => {
    console.log("user conected");
    client.emit('message', {
        user: 'Admin',
        message: 'Bienvenido'
    })

    client.on('disconnect', () => {
        console.log("user disconected");
    })

    // Listen the client
    client.on('message', (data, callback) => {
        client.broadcast.emit('message', data);
    })
});