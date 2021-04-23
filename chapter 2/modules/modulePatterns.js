function thisFunctionToBeExported() {
  console.log('test');
}

// Pattern 1
// This replaces the exports object with the above function
module.exports = thisFunctionToBeExported;

// Pattern 2 - Named exports - Most common pattern
module.exports.testFunction = thisFunctionToBeExported

// Combination of 1 & 2
// see combo.js
module.exports.verbose = (message) => {
  console.log(`verbose: ${message}`);
};

// const whatever = require(filePath)
// whatever.verbose

// Pattern 3
// Exporting an instantiated object from a constructor e.g
// this will cache this object across all files though so becareful
module.exports = new constructorName();

// Pattern 4
// Export the constructor itself
module.exports = constructorName;
