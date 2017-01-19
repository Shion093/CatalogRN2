import { observable, action, useStrict, runInAction } from 'mobx';
import Axios from 'axios';


useStrict(true);

class AWSstore {
  @observable counter = 0;

  @action sendRequest () {

  }

  @action decrement () {
    this.counter--;
  }
}

const aws = new AWSstore();
export default aws;