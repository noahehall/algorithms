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
  position = 0;
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
     * appends an element to the end of the list and returns this
     */
    append = (element) => {
      if (validateElement(element)) {
        this.dataStore[this.listSize++] = element;
        return this;
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

    // i.e. contains, useful to see if element exists in list
    getElement = (element) => this.get(element, true);
    getIndex = (element) => this.get(element);
    getCurrentElement = () => this.dataStore[this.position];
    getList = () => this.dataStore;

    toString = () => this.dataStore.toString();
    length = () => this.listSize;
    currentPosition = () => this.position;

  // UPDATE
    // move position to front of list
    front = () => {
      this.position = 0;
      return this;
    }
    // move position to end of list
    end = () => {
      this.position = this.listSize -1;
      return this;
    }
    // move position to previous element,
    previous = () => {
      if (this.position > 0) {
        --this.position;
        return this;
      }

      return false;
    }
    // move position to next element
    next = () => {
      if (this.position < this.listSize -1) {
        ++this.position;
        return this;
      }
      return false;
    }
    // move position to a specific element
    moveTo = (index) => {
      if (Number(index) > -1 && Number(index) < this.listSize -1) {
        this.position = Number(index);
        return this;
      }
      return false;
    }

  // DELETE
    clear = () => {
      this.dataStore = [];
      this.listSize = this.position = 0;

      return this;
    }

    /**
     * removes an element, if successful, returns this, else false
     */
    remove = (element) => {
      const index = this.getIndex(element);
      if (index > -1) {
        this.dataStore.splice(index, 1);
        --this.listSize;
        return this;
      }

      return false;
    }
}
