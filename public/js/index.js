 var socket = io();
 socket.on('connect', function () {
 console.log('connected to server');

 socket.emit('createMessage', {
     from: 'me',
     text: 'alright'
    });
 });

 socket.on('disconnect', function () {
 console.log('Disconnected');
 });

 socket.on('newEmail', function (email) {
     console.log('New Email', email);
 });

 socket.on('newMessage', function (message) {
     console.log('newMessage', message);
 });