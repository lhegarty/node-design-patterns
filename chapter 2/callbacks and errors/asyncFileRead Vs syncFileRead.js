// Do not write functions that are syncronous in one condition and async in another
// These are very hard to manage

const fs = require('fs');
const cache = {};

function inconsistentRead(filename, callback) {
  if (cache[filename]) {
    // invoked syncronously if file exists in cache
    callback(cache[filename])
  } else {
    // async
    fs.readFile(filename, 'utf8', (err, data) => {
      cache[filename] = data;
      callback(data);
    })
  }
}

// This is hard to manage downstream as depending on this method becomes
// a case of managing 2 states of sync and async

// A syncronous way of writing this is (no need for callback)

function syncronousRead(filename) {
  if (cache[filename]) {
    return cache[filename]
  } else {
    // async
    fs.readFile(filename, "utf8", (err, data) => {
      cache[filename] = fs.readFileSync(filename, 'utf8');
      return cache[filename];
    });
  }
}

// Using syncronous I/O is blocking and discouraged in most cases, however here it is
// kinda okay if the use case is something like bootstrapping

// if it will block the thread for concurrent requests though, it's bad

// Here is an async version

// The top part looking for a cached file is now async as it's directed to pass the syncronous
// callback to the next tick of the event loop.


// process.nextTick add the callback to the top of the event queue above all other I/O's

// if this is used in a recursive function, the event loop is starved of all other events

// in this case it is best to use setImmediate();

function asyncRead(filename, callback) {
  if (cache[filename]) {
    process.nextTick(function() {
      callback(cache[filename])
    })
  } else {
    fs.readFile(filename, "utf8", (err, data) => {
      cache[filename] = data;
      callback(data);
    });
  }
}