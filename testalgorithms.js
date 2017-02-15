var dsalgo = require('./index.js');

var twod = new dsalgo.arrays.TwoD(5, 5, 5);
twod[0][1] = 'noah';
console.dir([
  dsalgo.linear.plus(222220, 111911),
  twod,
  twod.calculateRowStats(false),
  twod.rowStats[0]
]);
