import React, {Component} from 'react';
import {View, Text, ScrollView, Image, Dimensions} from 'react-native';
import {observer} from 'mobx-react/native';
import {toJS} from 'mobx';
import _ from 'lodash';

import {Card, CardSection, Button} from '../common';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// Stores
import firebaseStore from '../../stores/FirebaseStore';

@observer
class Slider extends Component {

  renderSlide = () => {
    const screens = _.reject(toJS(firebaseStore.item.screenshots), _.isUndefined);
    return _.map(screens, (screen, i) => {
      return (
          <Card key={i}>
            <CardSection>
              <Image resizeMode={'contain'} style={{width: width - 22, height: height - 100}} source={{uri : screen}}/>
            </CardSection>
          </Card>
        )
    })
  }

  render () {
    return (
      <View style={{marginTop: 60, flex: 1, flexDirection : 'row', alignItems : 'center'}}>
        <ScrollView pagingEnabled={true} horizontal={true}>
          {this.renderSlide()}
        </ScrollView>
      </View>
    )
  }
}

export default Slider;

