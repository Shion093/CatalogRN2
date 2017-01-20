import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  LayoutAnimation,
  Dimensions,
  Image,
} from 'react-native';
import { CardSection, Card } from '../common';

const width = Dimensions.get('window').width;

class ListItem extends Component {
  render() {
    const { titleStyle, item } = styles;
    const { url, name } = this.props.library;

    return (
      <View style={item}>
        <TouchableOpacity
          style={item}
          onPress={this.gotoPage}>
          <Card>
            <CardSection>
              <View style={{flex: 1, alignItems: 'stretch'}}>
                <Image resizeMode={'contain'} style={{flex: 1, width: null, height: 150}} source={{uri: url}}/>
              </View>
            </CardSection>
            <CardSection>
              <Text style={titleStyle}>
                {name}
              </Text>
            </CardSection>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }

  gotoPage = () => {
    this.props.gotoSlider(this.props.library);
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  },
  item: {
    width: (width / 2),
  }
};

export default ListItem;
