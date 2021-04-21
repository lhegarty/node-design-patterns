// This uses a passing style but is not async

const result = [1, 27, 58];

result.map(el => {
  el - 1;
});

// on logging result, all values would be -1 from their original value.
// The callback is not async and is just iterating over array values