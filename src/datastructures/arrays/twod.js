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

  /* in the form [[total, average], [..]] for each row */
  rowStats = [];
  /* in the form [[total, average], [..]] for each column */
  columnStats = [];

  /**
   * calculates stats for all columns containing numbers
   * @see javascript datastructures and algorithms page 29
   * @param skipIsNan [boolean=true] if true, will not include isNaN in calculations
   */
  calculateRowStats = (skipIsNan = true) => {
    this.rowStats = [];
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

  /**
   * calculates stats for all columns containing numbers
   * @see javascript datastructures and algorithms page 29
   * @param skipIsNan [boolean=true] if true, will not include isNaN in calculations
   */
  calculateColumnStats = (skipIsNan = true) => {
    this.columnStats = [];
    let i = 0, k = this.length;
    while (k > i++) {
      this.forEach((row, rowi) => {
        this.columnStats.push([0])
        let isnan = 0;
        row.forEach((num, coli) => {
          if (!isNaN(num)) this.columnStats[rowi][i] += Number(num);
          else if (skipIsNan) ++isnan;
          else this.columnStats[rowi][i] += 0;

          if (coli + 1 === row.length)
            this.columnStats[rowi].push(this.columnStats[rowi]/(coli + 1 - isnan))
        });
      });
    }
    return this.columnStats;
  }
}
