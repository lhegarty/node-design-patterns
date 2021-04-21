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

// The reason this works is because the callback we pass to fs.readFile is async and invoked by the event loop after the syncronous
// intial code has been run
function readMyFile(filename, callback) {
  fs.readFile(filename, 'utf-8', function(err, data) {
    let parsed;
    if (err) {
      return callback(err)
    }

    try {
      parsed = JSON.parse(data);
    } catch {
      return callback(err);
    }
    callback(null, parsed);
  });
}


// CODE RUN SYNCRONOUSLY
function readMyFile(filename, callback) {
  fs.readFile(filename, 'utf-8', function(err, data) {
  });
}

// CODE RUN AFTERWARDS - ASYNCRONOUSLY

let parsed;
if (err) {
  return callback(err)
}

try {
  parsed = JSON.parse(data);
} catch {
  return callback(err);
}
callback(null, parsed);


// IF WE DIDN'T PUT THE TRY - CATCH IN THE ASYNC BLOCK, IT WOULDN'T CATCH ANY ERRORS COMING FROM JSON.PARSE AS IT WOULD HAVE BEEN RUN ON
// THE SYNCRONOUS FIRST PASS INSTEAD.
