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
  length = 0;
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
          ++this.length;
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
        this.dataStore[this.length++] = element;
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
    getAll = () => this.dataStore;

    toString = () => this.dataStore.toString();

  // UPDATE
    // move position to front of list
    front = () => {
      this.position = 0;
      return this;
    }
    // move position to end of list
    end = () => {
      this.position = this.length -1;
      return this;
    }
    // move position to previous element,
    previous = () => this.position-- > 0
      ? this
      : false;

    // move position to next element
    next = () => this.position++ < this.length - 1
      ? this
      : false;

    // move position to a specific element
    moveTo = (index) => {
      if (Number(index) > -1 && Number(index) < this.length -1) {
        this.position = Number(index);
        return this;
      }
      return false;
    }

  // DELETE
    clear = () => {
      this.dataStore = [];
      this.length = this.position = 0;

      return this;
    }

    /**
     * removes an element, if successful, returns this, else false
     */
    remove = (element) => {
      const index = this.getIndex(element);
      if (index > -1) {
        this.dataStore.splice(index, 1);
        --this.length;
        return this;
      }

      return false;
    }

  // ITERATION
    // loop forward
    forEach = (process, backwards = false) => {
      for (let element of !backwards ? this.genEachForward() : this.genEachBackward())
      process (element, this.position, this.dataStore);

      return this;
    }

    // generator loop forward
    genEachForward = function* () {
      this.front();
      yield this.getCurrentElement();
      while (this.next()) yield this.getCurrentElement();
    }

    // generator loop backward
    genEachBackward = function* () {
      this.end();
      yield this.getCurrentElement();
      while (this.previous()) yield this.getCurrentElement();
    }
}
