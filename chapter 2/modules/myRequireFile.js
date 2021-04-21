// revealing module pattern
// revealing is an object with the saySecret method on it
const revealing = require('./revealingModulePattern');
revealing.saySecret();

// pattern 2

const pattern2 = require('./modulePatterns').testFunction;
pattern2();
