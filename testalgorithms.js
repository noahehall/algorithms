var dsalgo = require('./index.js');

var twod = new dsalgo.arrays.TwoD(5, 5, 1);

console.dir([
  dsalgo.linear.plus(222220, 111911),
  twod,
  typeof twod,
  twod.constructor,
  dsalgo
]);
