import BaseArray from './base.js';
/**
 * creates a two dimensional array and returns
 * @see datastructures and algorithms in javascript, page 28
 */
export default class TwoD extends BaseArray {
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

  /* in the form [[N, sum, average], [..]] for each row */
  rowStats = [];
  /* in the form [[N, sum, average], [..]] for each column */
  columnStats = [];

  /**
   * calculates stats for all rows containing numbers
   * @see javascript datastructures and algorithms page 29
   * @param skipIsNan [boolean=true] if true, will not include isNaN in calculations
   */
  calculateRowStats = (skipIsNan = true) => {
    this.rowStats = [];
    this.forEach((row, rowi) => {
      this.rowStats.push([0, 0])
      row.forEach((num, coli) => {
        if (!isNaN(num)) {
          // sum
          this.rowStats[rowi][1] += Number(num);
          // N
          this.rowStats[rowi][0]++;
        }
        // N
        else if (skipIsNan) this.rowStats[rowi][0]--;

        // average
        if (coli + 1 === row.length)
          this.rowStats[rowi].push(this.rowStats[rowi][1]/(this.rowStats[rowi][0]))
      });
    });

    return this.rowStats;
  }

  /**
   * calculates stats for all columns containing numbers
   * @see javascript datastructures and algorithms page 29
   * @param skipIsNan [boolean=true] if true, will not include isNaN in calculations
   */
  calculateColumnStats = (skipIsNan = true) => {
    this.columnStats = [];
    let i = 0, k = this.length;
    while (k > i) {
      this.columnStats.push([0, 0])
      this.forEach((row, rowi) => {
        row.forEach((num, coli) => {
          if (coli === i) {
            if (!isNaN(num)) {
              // sum
              this.columnStats[i][1] += Number(num);
              // N
              this.columnStats[i][0]++;
            }
            // N
            else if (skipIsNan) this.columnStats[i][1]--;

            // average
            if (rowi + 1 === row.length) {
              this.columnStats[i].push(this.columnStats[i][1]/this.columnStats[i][0])
            }
          }
        });
      });
      i++;
    }
    return this.columnStats;
  }
}
