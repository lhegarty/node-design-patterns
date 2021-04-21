// This is not advised as it defeats the purpose of the module system

// a variable declared without var let or const gets assigned to the global object
// once this file is required into an app.js it assigns the following to global scope

myVar = 'Luke';

testFunction = function() {
  console.log('luke is testing');
}

🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮