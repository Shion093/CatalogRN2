import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {Card, CardSection, Button} from '../common';

// Stores
import AwsStore from '../../stores/AWSstore';

class Home extends Component {
  render () {
    return (
      <View style={{marginTop: 60, flex: 1}}>
        <Card>
          <CardSection>
            <Text>Hola</Text>
            <Button onPress={this.testS3}>TEST</Button>
          </CardSection>
        </Card>
      </View>
    )
  }

  testS3 = () => {
    AwsStore.sendRequest();
  }
}

export default Home;
