import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react/native';
import {Actions} from 'react-native-router-flux'

import {Spinner} from '../common';
import List from '../containers/List';

// Stores
import firebaseStore from '../../stores/FirebaseStore';

@observer
class Home extends Component {

  componentWillMount () {
    firebaseStore.getItems();
  }

  gotoSlider = (item) => {
    Actions.slider({text : 'Header'});
    firebaseStore.setItem(item);
  }

  renderList = () => {
    if (firebaseStore.items.length === 0) {
      return <Spinner />;
    }
    return  <List items={firebaseStore.items} firebaseStore={firebaseStore} gotoSlider={this.gotoSlider}/>;
  }

  render () {
    return (
      <View style={{marginTop: 60, flex: 1}}>
        {this.renderList()}
      </View>
    )
  }
}

export default Home;

