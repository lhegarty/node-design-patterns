// If an error occurs in a different stack and we haven't written a catch block to try and handle it we can use

process.on("uncaughtException", (err) => {
  console.error("This will catch at last the " + "JSON parsing exception: " + err.message);
  // Terminates the application with 1 (error) as exit code:
  // without the following line, the application would continue
  process.exit(1);
});

// This is because node emits an event called uncaughtException before it exits the application that we can
// listen to and assign a handler to debug.

// uncaughtException leaves the application in an unstable place and it is always advised to exit the application after it occurs