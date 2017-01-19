import React from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

// In-house modules
import { Header } from './components/common';
import Home from './components/scenes/Home';

const Styles = {
  navBarStyle : {
    backgroundColor : '#1e2226',
  },
  navBarTitleStyle : {
    color : '#fff',
  },
};

const App = () => {
  return (
    <Router>
      <Scene {...{key: 'root', navigationBarStyle: Styles.navBarStyle, titleStyle: Styles.navBarTitleStyle}}>
        <Scene key="home" component={Home} title="Home" initial={true}/>
        <Scene key="pageTwo" component={Home} title="PageTwo"/>
      </Scene>
    </Router>
  );
};

export default App;
