var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
//on escuchar procesos
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});
//emit son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Laura',
    mensaje: 'Hola mundo'
}, function(resp) { //esta funcion se va a ejecutar cuando todo salga bien
    console.log('Respuesta server: ', resp);
});
//Escuchar Informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});