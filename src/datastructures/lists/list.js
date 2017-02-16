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
    /**
     * inserts and returns element, else false
     */
    insert = (element, after) => {
      if (validateElement(element) && validateElement(after)){
        const index = this.getIndex(after);
        if (index > -1) {
          this.dataStore.splice(index + 1, 0, element);
          ++this.listSize;
          return element;
        }
      }

      return false;
    }

    /**
     * appends an element to the end of the list
     */
    append = (element) => {
      if (validateElement(element)) {
        this.dataStore[this.listSize++] = element;
        return true;
      }

      return false;
    }

  // READ
    get = (element, type = 'index') => {
      let that = -1;
      if (validateElement(element)) {
        this.dataStore.some((el, i) => {
          if (el === element) that = type === 'index'
            ? i
            : el;
        });
      }

      return that;
    }

    getElement = (element) => this.get(element, true);
    getIndex = (element) => this.get(element);

    getList = () => this.dataStore;

    toString = () => this.dataStore.toString();

    length = () => this.listSize;

    currentPosition = () => {
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
