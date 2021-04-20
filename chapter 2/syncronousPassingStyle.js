// This is a syncronous passing style function
// Callbacks replace this return statement which is a syncronous outcome of invocation
// Also known as 'Direct Style'

function add(a, b) {
  return a + b;
}

// This written as a syncronous continuation passing style is and there
// is no need to ever write a syncronous function like this, only use direct style

function add(a, b, callback) {
  callback(a + b);
}

// This function is still syncronous and would wait for the return of the callback
// before being able to continue

console.log('before')
add(1, 2, function(result) {
  console.log(`Result: ${result}`);
})
console.log('after');

/// this would log, before, Result: 3, after