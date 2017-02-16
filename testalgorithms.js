var dsalgo = require('./index.js');

var twod = new dsalgo.arrays.TwoD(5, 5, 5);
console.dir([
  dsalgo,
  dsalgo.linear.plus(222220, 111911),
  twod.calculateRowStats(false),
  twod.calculateColumnStats()
]);
