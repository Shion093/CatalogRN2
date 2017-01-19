import { observable, action, useStrict } from 'mobx';

useStrict(true);

class Counter {
  @observable counter = 0;

  @action increment () {
    this.counter++;
  }

  @action decrement () {
    this.counter--;
  }
}

const counter = new Counter();
export default counter;