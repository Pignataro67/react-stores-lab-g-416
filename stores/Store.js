class Store {
 constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }
  
   addListener(listener) {
    this.listeners.push(listener);
    const removeListener = () =>
      this.listeners = this.listeners.filter(cListener => cListener !== listener)
    return removeListener;
  }
}

module.exports = Store;
