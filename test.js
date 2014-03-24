var norepeat = require('./index');

var arr = [1, 2, "1", "2", 1, 2, "1", "2"];

console.log("deepEqual(default): %j", norepeat(arr));
console.log("deepEqual:          %j", norepeat(arr, true));
console.log("No deepEqual:       %j", norepeat(arr, false));