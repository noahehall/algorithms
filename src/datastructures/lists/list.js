// validation
const validateElement = (element) => element !== undefined && element !== null;

/**
 * creates a list
 * @see datastructures and algorithms in javascript, page 36
 */
export default class List {
  constructor() {
    return this;
  }

  // properties
  listSize = 0;
  pos = 0;
  dataStore = [];

  // behavior
  // CREATE
    insert = () => {
      // TODO
    }
    append = (element) => {
      if (validateElement(element)) {
        this.dataStore[this.listSize++] = element;
        return true;
      }

      return false;
    }

  // READ
    getIndex = (element) => {
      let index = -1;
      if (validateElement(element)) {
        this.dataStore.some((el, i) => {
          if (el === element) index = i;
        });
      }

      return index;
    }

    getList = () => this.dataStore;

    toString = () => this.dataStore.toString();


    length = () => this.listSize;

    currentPosition = () => {
      // TODO
    }
    getElement = () => {
      // TODO
    }
    contains = () => {
      // TODO
    }
  // UPDATE
    front = () => {
      // TODO
    }
    end = () => {
      // TODO
    }
    previous = () => {
      // TODO
    }
    next = () => {
      // TODO
    }
    moveTo = () => {
      // TODO
    }
  // DELETE
    clear = () => {
      // TODO
    }

    /**
     * removes an element, if successful, returns removed element, else false
     */
    remove = (element) => {
      const index = this.getIndex(element);
      if (index > -1) {
        this.dataStore.splice(index, 1);
        --this.listSize;
        return element;
      }

      return false;
    }
}
