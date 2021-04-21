const secretThing = 'secret phrase';

function saySecret() {
  console.log(secretThing);
}

module.exports = {
  saySecret
}

// This does not reveal the variable secretThing although it is being used in the exported function
// good example of using closure