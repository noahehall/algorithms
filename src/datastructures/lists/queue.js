import Stack from './stack.js';

/**
 * creates a Queue
 * @see datastructures and algorithms in javascript, page 59
 */
export default class Queue extends Stack {
  constructor() {
    super();
  }

  // behavior
  // CREATE
    enqueue = this.push;
  // READ
    get first () {
      this.front();
      return this.getCurrentElement();
    }

    get last () {
      this.end();
      return this.getCurrentElement();
    }
  // UPDATE
  // DELETE
    dequeue = () => {
      if (this.top) {
        this.front();
        return this.pop();
      }

      return false;
    };
}
