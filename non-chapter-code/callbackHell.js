const fs = require("fs");

/* In this code, I am creating a asyncronous function that reads from a file and handles the success or failure of this in a callback that I pass to it.
This callback has to take an error as its first parameter. Due to the async nature of the file read, I cannot handle the returned file text value outside of
this callback as it will simply return be 'undefined' as the syncronous code in the main flow will complete before the file read has completed.

As I have to handle this data in the callback function where it will be available, any further operations I wish to perform on this data will again result in
more callbacks being written and nested within the code, more error handling etc. This is called callback Hell as it results in loads of nested callbacks.*/

// If I need to handle the data in anyway, e.g. parse JSON from the file, I would do that inside the fs.readFile method using a try/catch
// after the error conditional to ensure I catch any parsing errors that could occur from that operation.

const fileReading = (filePath, callbackFunc) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return callbackFunc(err);
    } else {
      return callbackFunc(null, data);
    }
  });
};

const fileReadCallback = function (err, data) {
  if (err) {
    throw new Error(err);
  } else {
    console.log("this is where I process the success", data);
  }
};

fileReading("link.txt", fileReadCallback);
