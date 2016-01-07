var websocket = require('websocket-stream');
var port = process.argv[2];
var wss = websocket.createServer({ port: port }, handler);

function handler(handle) {
  process.stdin.pipe(handle);
}
