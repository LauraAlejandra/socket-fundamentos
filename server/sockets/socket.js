const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data); //el broadcast emite a todos los usuarios conectados
        /*if (mensaje.usuario) {
            callback({
                respuesta: 'todo salió bien'
            });
        } else {
            callback({
                respuesta: 'todo salió mal!!!'
            });
        }*/

    });
});