/**
 * creates a two dimensional array and returns
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

    this.prototype = Object.create(Array.prototype);
    this.push.apply(this, arr);
    return this;
  }

  rowStats = [];

  /**
   * calculates stats for all columns containing numbers
   * @see javascript datastructures and algorithms page 29
   * @param skipIsNan {boolean} if false, will not skip isNaN
   */
  calculateRowStats = (skipIsNan = true) => {
    this.forEach((row, rowi) => {
      this.rowStats.push([0])
      let isnan = 0;
      row.forEach((num, coli) => {
        if (!isNaN(num)) this.rowStats[rowi][0] += Number(num);
        else if (skipIsNan) ++isnan;
        else this.rowStats[rowi][0] += 0;

        if (coli + 1 === row.length)
          this.rowStats[rowi].push(this.rowStats[rowi]/(coli + 1 - isnan))
      });
    });

    return this.rowStats;
  }
}
