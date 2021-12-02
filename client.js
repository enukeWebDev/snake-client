const net = require("net");
const { IP, PORT } = require('./constants');
const { setupInput } = require('./input');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('message', () => {
    console.log('Connected...');
    conn.write('Name: E4N');
  });

  return conn;
};

const conn = connect();
setupInput(conn);
module.exports = { connect };
