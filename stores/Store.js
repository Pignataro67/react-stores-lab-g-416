class Store {
 constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }
}

module.exports = Store;
