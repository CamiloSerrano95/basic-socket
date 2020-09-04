var socket = io();
socket.on('connect', function() {
    console.log("Conectado al servidor");
});

socket.on('disconnect', function() {
    console.log("Desconectado del servidor");
});

socket.emit('message', {
    user: "Camilo Serrano",
    message: "Hola"
}, function(res) {
    console.log(res);
});

socket.on('message', function(res) {
    console.log("Server: ", res);
});