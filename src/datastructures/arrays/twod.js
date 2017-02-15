/**
 * creates a matrix and returns
 * @see datastructures and algorithms in javascript, page 28
 */
export default class TwoD extends Array {
  constructor(rows = 0, cols = 0, init) {
    super();
    const arr = [];
    if (Number(rows) > 0)
      while(rows-- > 0) {
        let reset = cols;
        const columns = [];
        if (Number(cols) > 0)
          while (cols-- > 0) {
            columns[columns.length] = init;
          }
        arr[arr.length] = columns;
        cols = reset;
      }

    this.push.apply(this, arr);

    return this;
  }
}
