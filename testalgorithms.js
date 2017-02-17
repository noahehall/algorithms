var dsalgo = require('./index.js');

var twod = new dsalgo.arrays.TwoD(5, 5, 5);

var list = new dsalgo.lists.List();
list.append('noah');
list.append('edward');
list.append('hall');

var stack = new dsalgo.lists.Stack();

console.dir([
  dsalgo,
  dsalgo.linear.plus(222220, 111911),
  twod.calculateRowStats(false),
  twod.calculateColumnStats(),
  list.constructor,
  list.forEach((el, i) => console.log(el, i)),
  stack.top,
  stack.push('noah'),
  stack.peek(),
  stack.top,
  stack.pop(),
  stack.top,
  stack.insert
]);
