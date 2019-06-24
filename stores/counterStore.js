import Store from './store';

class CounterStore extends Store {
  constructor() {
    super(0);
  }
  
  getState() {
    return this.state
  }
}

module.exports = new CounterStore();
