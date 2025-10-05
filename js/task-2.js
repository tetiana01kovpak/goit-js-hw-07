class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  addItem(item) {
    this.#items.push(item);
  }

  removeItem(item) {
    this.#items = this.#items.filter(it => it != item);
  }

  getItems() {
    return this.#items;
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
