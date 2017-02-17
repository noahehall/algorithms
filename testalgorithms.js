var dsalgo = require('./index.js');

var twod = new dsalgo.arrays.TwoD(5, 5, 5);

var list = new dsalgo.lists.List();
list.append('noah');
list.append('edward');
list.append('hall');

var stack = new dsalgo.lists.Stack();
stack.push('noah')
var queue = new dsalgo.lists.Queue();
queue.enqueue('noah');
queue.enqueue('hall');
console.dir([
  dsalgo,
  dsalgo.linear.plus(222220, 111911),
  twod.calculateRowStats(false),
  twod.calculateColumnStats(),
  typeof list,
  stack.top,
  stack.peek(),
  stack.pop(),
  stack.pop(),
  stack.top,
  'queue',
  queue.first,
  queue.last,
  queue.dequeue(),
  queue.length
]);
