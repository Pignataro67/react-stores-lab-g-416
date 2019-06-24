import Store from './store';

class CounterStore extends Store {
  constructor() {
    super(0);
  }
  
  getState() {
    return this.state;
  }
  
  incrementCount() {
    this.state ++;
  }
  
  decrementCount() {
    this.state --;
  }
}

module.exports = new CounterStore();
