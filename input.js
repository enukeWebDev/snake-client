// setup interface to handle user input from stdin

let connection;

const setupInput = conn => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.on('message', handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {

  if (key === '\u0003') {
    console.log('BrB!');
    process.exit();
  }

  if (key === 'w') {
    connection.write("Move: up");
  }

  if (key === 's') {
    connection.write("Move: down");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 'd') {
    connection.write("Move: right");
  }

  if (key === 'f') {
    connection.write("Too Fast Catch!");
  }

  if (key === 'k') {
    connection.write("Krazyyyyy snake!");
  }

};

module.exports = { setupInput };

/*
const handleUserInput = (data) => {
  if (data === '\u0003') {
    console.log('BrB!')
    process.exit();
  }

  //works like the for...in loop
  for (const [key, value] of Object.entries(movement)) {
    if (data === key) {
      clearInterval(snakeMoving);
      snakeMoving = setInterval(() => {
        connection.write(value);
      }, speed);
    };
  };
};

module.exports = { setupInput };
*/

