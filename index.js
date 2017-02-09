'use strict';

/**
 * adds two numbers and returns the result
 * addition algorithm
 * @see Algorithms_in_a_Nutshell_Second_Edition
 */
function plus(one, // 10 === [1,0]
two) {
  var sum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var n1 = String(one).split('').map(function (n) {
    return +n;
  }),
      n2 = String(two).split('').map(function (n) {
    return +n;
  });

  var position1 = n1.length,
      position2 = n2.length,
      max = Math.max(position1, position2) - 1,
      carry = 0;

  while (--position1 >= 0 && --position2 >= 0) {
    var total = n1[position1] + n2[position2] + carry;
    if (total > 9) {
      sum[max] = total - 10;
      carry = 1;
    } else {
      sum[max] = total;
      carry = 0;
    }
    max--;
  }
  if (position1 !== 0) {
    sum.unshift(n1.slice(0, position1 - 1));
  } else if (position2 !== 0) {
    sum.unshift(n2.slice(0, position - 1));
  }
  sum[max] = carry;
  return [sum.join(), position1, position2, max, carry, n1, n2];
}

var linear = {
  plus: plus
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var algorithms = {
  linear: _extends({}, linear)
};

module.exports = algorithms;
