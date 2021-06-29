class Profiler {
  constructor(label) {
    this.label = label;
    this.lastTime = null;
  }

  start() {
    this.lastTime = process.hrtime();
  }

  end() {
    const diff = process.hrtime(this.lastTime);
    console.log(`Timer ${this.label} took ${diff[1]} nanoseconds`);
  }
}
// This is no good in production as the output to the console is massive.
// We can encapsulate this into a factory method which detects production or dev environments.

const noopProfiler = {
  start() {},
  end() {}
}

// this returns an object with empty methods if its production.
export function createProfiler (label) {
  if (process.env.NODE_EV = 'production') {
    return noopProfiler;
  }
  return new Profiler(label);
}