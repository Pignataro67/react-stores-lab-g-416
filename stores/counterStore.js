import Store from './store';

class CounterStore extends Store {
  constructor() {
    super(0);
  }
}

module.exports = new CounterStore();
