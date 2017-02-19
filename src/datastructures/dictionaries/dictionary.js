import BaseArray from '../arrays/base.js';

export default class Dictionary {
  constructor() {
    this.size = 0;
    this.dataStore = new BaseArray();
    return this;
  }

  // CREATE
  add = (key, value) => {
    this.dataStore[key] = value;
    ++this.size;
    return this;
  }

  // READ
  find = (key) => this.dataStore[key];

  displayObject = () => {
    const object = {};
    for (let key in this.dataStore)
      object[key] = this.dataStore[key];

    return object;
  }

  displayValuesSorted = () => {
    const array = [];
    for (let key in Object.keys(this.dataStore).sort()) {
      array.push(this.dataStore[key]);
    }

    return array;
  }

  // UPDATE

  // DELETE
  remove = (key) => {
    delete this.dataStore[key];
    --this.size;
    return this;
  }

  clear = () => {
    this.dataStore = new BaseArray();
    this.size = 0;

    return this;
  }


}
