function Logger(name) {
  if (!(this instanceof Logger)) {
    return new Logger(name);
  }
  this.name = name;
}

module.exports = Logger;
// This function guards agaisnt any invocations that don't use the new keyword
// and automatically generate an object as though the new keyword was being used.

// Cleaner es6 syntax is

function Logger(name) {
  if (!new.target) {
    return new LoggerConstructor(name);
  }
  this.name = name;
}
// ---------------------------------------------------------------
ß