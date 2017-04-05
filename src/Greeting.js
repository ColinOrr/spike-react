class Greeting {
  sayHello() {
    return `Hello ${this.name}`;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

export default Greeting;
