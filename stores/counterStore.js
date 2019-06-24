import Store from './store';

class CounterStore extends Store {
  constructor() {
    super(0);
  }
  
  getState() {
    
  }
}

module.exports = new CounterStore();
