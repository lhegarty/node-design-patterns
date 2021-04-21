// errors appear as the first argument in a callback

function myCallback(err, data) {
  if (err) {
    handleError(err);
  } else {
    console.log(data);
  }
}

fs.readFile('data.txt', 'utf-8', function() {
  myCallback(err, data);
});


// to propagate errors, they need to be passed to the next callback in the chain

function readMyFile(filename, callback) {
  fs.readFile(filename, 'utf-8', function(err, data) {
    let parsed;
    if (err) {
      return callback(err)

      try {
        parsed = JSON.parse(data);
      } catch {
        return callback(err);
      }
      callback(null, parsed);
    }
  });
}