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