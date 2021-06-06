const net = require("net");
const { myNumber, myString } = require("./client");
const myObjects = require("./client")

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};
setupInput();


