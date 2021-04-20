// Pseudo code

function readFile(fileName) {
  const listeners = [];
  readingFunction(fileName, function(fileValue) {
    listeners.forEach(function(listener) {
      return listener(value);
    })
  });

  return {
    onDataReady: function(listener) {
      listeners.push(listener);
    }
  }
}


// ReaderOne will be an object with the onDataReady method
const readerOne = readFile('data.txt');

readerOne.onDataReady(function(data) {
  console.log(`First call data: ${data}`);

  const readerTwo = readFile("data.txt");

  readerTwo.onDataReady(function (data) {
    console.log(`Second call data: ${data}`);
  });
});

// The second readerTwo method never fires

// The reason behind this is that the first time readerOne is made, the readFile method
// is asyncronous and is passed to demultiplexer to go off and perform file I/O read operation

// Because readerTwo is being created inside the async callback of readerOne's onDataReady method,
// readerTwo is being created inside the same eventloop cycle as readerOne was created and cached
// The event loop will syncronously try and fetch the same value and immediately invoke the callback, but
// listeners are being registered after readerTwo so will never be invoked.




