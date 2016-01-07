var websocket = require('websocket-stream');
var socket = process.argv[2];

var ws = websocket("ws://" + socket);

ws.pipe(process.stdout);
