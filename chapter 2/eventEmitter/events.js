const EventEmitter = require('EventEmitter');

const emitterInstance = new EventEmitter();

emitter.emit("fileread", file);

emitter.on('fileread', file => console.log(file + ' was read'))

emitter.on("error", (err) => console.log("Error emitted: " + err.message));


// To listen to event being emitted.
emitterInstance.on('eventName', (err) => {
  try {
    // try whatever

  } catch {
    console.error(err);
  }
});

// To add new event
emitterInstance.emit('eventName', args);
