import React, { Component } from 'react';
import { ListView } from 'react-native';
import ListItem from './ListItem';
import {observer} from 'mobx-react/native';
import {observe} from 'mobx';

@observer
class LibraryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disposer: null,
    }
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.items);

    const disposer = observe(this.props.firebaseStore, 'items', (value) => {
      if (value) {
        this.dataSource = ds.cloneWithRows(value.newValue);
      }
    });
    this.setState({disposer});
  }

  renderRow = (library) => {
    return <ListItem library={library} gotoSlider={this.props.gotoSlider}/>;
  }

  render () {
    return (
      <ListView
        enableEmptySections={true}
        contentContainerStyle={styles.list}
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const styles = {
  list: {
    flexDirection : 'row',
    flexWrap      : 'wrap',
    alignItems    : 'flex-start',
    paddingBottom : 20,
  },
};

export default LibraryList;
