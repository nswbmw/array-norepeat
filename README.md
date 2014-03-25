## array-norepeat ##

return an array that removing duplicate elements of the given array, still keep the order of the elements.

### Install ###

    npm install array-norepeat

### Usage ###

    var norepeat = require('array-norepeat');
    norepeat(array[, deepEqual])

**NB:** if you set deepEqual `true`, `norepeat` will use `===` to compare two element, otherwise use `==`. default `true`.

### Example ###

    var norepeat = require('array-norepeat');

    var arr = [1, 2, "1", "2", 1, 2, "1", "2"];

    console.log("deepEqual(default): %j", norepeat(arr));
    //=> [1, 2, "1", "2"]
    console.log("deepEqual:          %j", norepeat(arr, true));
    //=> [1, 2, "1", "2"]
    console.log("No deepEqual:       %j", norepeat(arr, false));
    //=> [1, 2]

### License ###

MIT