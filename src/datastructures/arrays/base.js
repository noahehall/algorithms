/**
 * creates a two dimensional array and returns
 * @see datastructures and algorithms in javascript, page 28
 */
export default class BaseArray extends Array {
  constructor() {
    super();

    this.prototype = Object.create(Array.prototype);
    return this;
  }
}
