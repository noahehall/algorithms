import List from './list.js';

/**
 * creates a Stack
 * @see datastructures and algorithms in javascript, page 49
 */
export default class Stack extends List {
  constructor() {
    super();
  }

  // behavior
  // CREATE
    push = this.append;

  // READ
    get top() { return this.length }

    // get current element, but dont remove it
    peek = () => this.getCurrentElement();

  // UPDATE

  // DELETE
    pop = () => this.remove(this.getCurrentElement(), true);
}
