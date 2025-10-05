class StringBuilder {
  #string;

  constructor(str) {
    this.#string = str;
  }

  padStart(str) {
    this.#string = str + this.#string;
  }

  padEnd(str) {
    this.#string = this.#string + str;
  }

  padBoth(str) {
    this.#string = str + this.#string + str;
  }

  getValue() {
    return this.#string;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
