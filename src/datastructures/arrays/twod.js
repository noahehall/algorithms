/**
 * creates a matrix and returns
 * @see datastructures and algorithms in javascript, page 28
 */
export default class TwoD {
  constructor(rows = 2, cols = 2, init = 0) {
    const arr = [];
    while(rows-- > 0) {
      let reset = cols;
      const columns = [];
      while (cols-- > 0) {
        columns[columns.length] = init;
      }
      arr[arr.length] = columns;
      cols = reset;
    }
    return arr;
  }
}
