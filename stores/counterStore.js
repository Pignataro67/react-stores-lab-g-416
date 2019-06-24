import Store from './store';

class CounterStore extends Store {
  constructor() {
    super(0);
  }
  
  getState() {
    return this.state;
  }
  
  incrementCount() {
    
  }
}

module.exports = new CounterStore();
