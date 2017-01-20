import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react/native';
import {Actions} from 'react-native-router-flux'

import {Card, CardSection, Button, Spinner} from '../common';
import List from '../containers/List';

// Stores
import firebaseStore from '../../stores/FirebaseStore';

@observer
class Home extends Component {

  componentWillMount () {
    firebaseStore.getItems();
  }

  gotoSlider = (item) => {
    Actions.slider({text : 'Hello World!'});
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

//
// new Firebase("https://authrn-ac203.firebaseio.com/").child("items").update({
//   dome8: {
//     name: 'lubys',
//     url: "https://firebasestorage.googleapis.com/v0/b/authrn-ac203.appspot.com/o/office%2Fweb-DNAMIC4.jpg?alt=media&token=233d91c6-2c18-4d49-9109-e18e315264e1",
//     screenshots : {
//       1: "https://firebasestorage.googleapis.com/v0/b/authrn-ac203.appspot.com/o/office%2Fweb-DNAMIC4.jpg?alt=media&token=233d91c6-2c18-4d49-9109-e18e315264e1",
//       2: "https://firebasestorage.googleapis.com/v0/b/authrn-ac203.appspot.com/o/office%2Fweb-DNAMIC4.jpg?alt=media&token=233d91c6-2c18-4d49-9109-e18e315264e1",
//       3: "https://firebasestorage.googleapis.com/v0/b/authrn-ac203.appspot.com/o/office%2Fweb-DNAMIC4.jpg?alt=media&token=233d91c6-2c18-4d49-9109-e18e315264e1",
//     },
//   },
// });
