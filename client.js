const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.on("data", () => {
    console.log('Message from server: you dead, you suck!');
  });


  conn.on("connect", () => {
    console.log('You are now connected')
  });

  conn.on("connect", () => {
    conn.write('Name: MAT');
  });
 
  // setInterval(("data", () => {
  //   conn.write("Move: left");
  // }), 500);
  // setInterval(("data", () => {
  //   conn.write("Move: up");
  // }), 600);
  // setInterval(("data", () => {
  //   conn.write("Move: down");
  // }), 700);
  
  // setInterval(("data", () => {
  //   conn.write("Move: right");
  // }), 800);

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};

console.log("Connecting ...");
connect();


const num = 14;
const str = 'lalala'
const funcy = () =>{
  console.log('FUNCY!')
};
  module.exports = {
    connection: connect,
    myNumber: num,
    myString: str,
    myfunc: funcy,
  };