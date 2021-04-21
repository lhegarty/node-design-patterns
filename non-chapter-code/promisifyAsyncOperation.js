const fs = require("fs");
const util = require("util");

const fileReading = util.promisify(fs.readFile);

fileReading("./link.txt", "utf-8")
  .then((e) => {
    console.log(e);
  })
  .catch((err) => {
    console.error(err);
  });

  // This method avoids using a callback to handle the readFile operation as we have made fs.readFile return a promise. This is
  // alot easier to handle as we then handle the promise when the operation returns or catch an error.
