/**
 * LinkedList, page 73, 81, 83
 */
export default class LinkedList {
  constructor () {
    this.head = {element: 'LinkedListHead', next: null, previous: null}
    this.length = 0;
    this.position = 0;
    this.current = this.head;
  }

  // CREATE
    insert = (element, item = undefined) => {
      const afterThis = this.length++ > 0 && typeof item !== 'undefined'
       ? this.find(item)
       : this.findLast();
      const newNode = {element, next: afterThis.next || null, previous: afterThis};
      afterThis.next = newNode;

      return this;
    }
  // READ
    find = (item, search = this.head) => {
      if (!this.length || !search.next) return false;
      else if (search.element === item) return search;
      else return this.find(item, search.next);
    }

    findLast = (item = this.current) => {
      return item.next
        ? this.findLast(item.next)
        : item;
    }

    findFirst = (item = this.head) => {
      return item.next
        ? item.next
        : false;
    }

    display = (items = [], next = this.head) => {
      if (!this.length || !next.next) return items;

      items.push(next.next.element);
      return this.display(items, next.next);
    }

    displayR = (items = [], last = this.findLast()) => {
      if (!this.length || !last.previous) return items;

      items.push(last.element);
      return this.displayR(items, last.previous);
    }

  // UPDATE
    advance = (n = 1) => {
      let total = Math.abs(n);
      if (this.position < this.length)
        while (total-- > 0 && this.current.next)
          this.next();
      else if (this.position > 1)
        while (total-- > 0 && this.position > 1)
          this.previous();

      return this.current;
    }

    next = () => {
      if (this.current.next) {
        ++this.position;
        this.current = this.current.next;

        return this.current;
      }

      return false;
    }

    previous = () => {
      if (this.current.previous) {
        --this.position;
        this.current = this.current.previous;

        return this.current;
      }

      return false;
    }
  // DELETE
    remove = (item) => {
      if (!this.length) return false;
      const thisNode = this.find(item);
      if (thisNode && thisNode.next) {
        thisNode.previous.next = thisNode.next || null;
        thisNode.next.previous = thisNode.previous;
        thisNode.next = null;
        thisNode.previous = null;

        --this.length;
        return this;
      }
      return false;
    }
}
