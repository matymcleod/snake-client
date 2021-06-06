const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("data", () => {
    console.log('Message from server: you dead, you suck!');
  });


  conn.on("connect", () => {
    console.log('You are now connected');
    conn.write('Name: MAT');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};

  module.exports = connect;