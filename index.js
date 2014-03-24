function norepeat(array, deepEqual) {
  if (deepEqual == undefined) {
    deepEqual = true;
  }
  var obj = {};
  var _array = [];
  var prefix = '';
  for (var i = 0, l = array.length; i < l; i++) {
    if ((typeof array[i] === 'string') && (deepEqual === true)) {
      prefix = '_';
    } else {
      prefix = '';
    }
    if (!obj[prefix + array[i]]) {
      obj[prefix + array[i]] = true;
      _array.push(array[i]);
    }
  }
  return _array;
}

module.exports = norepeat;