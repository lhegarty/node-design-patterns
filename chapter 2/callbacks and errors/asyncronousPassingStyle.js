// Async continuation-passing style

function addAsync(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 100);
}

console.log('before');
addAsync(1, 2, function(result) {
  console.log(`Result: ${result}`);
});
console.log('after');

// This would log, before, after, Result: 3
// This is because the callback is async and gets handed off to the event demultiplexer and
// the addAsync function resolves before the callback has returned, continuing to log after