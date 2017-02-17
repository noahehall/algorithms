import List from './list.js';

export default class Stack extends List {
  constructor() {
    super();
  }

  get top() { return this.length};
  // behavior
    push = this.append;
}
