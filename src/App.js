import React, { Component } from 'react';
// import Wrapper from './Wrapper'
import DemoAutoAdjust from './components/DemoAutoAdjust'
// import DemoIVC from './components/DemoInheritanceVsComposition'
import logo from './logo.svg';
import app from './stores/app'

export const container = document.getElementById('demo-portal')

class App extends Component {
  render() {
    return (
      <DemoAutoAdjust>
          <img
              src="https://www.alltech.com/sites/default/files/styles/social_friendly/public/2018-03/PigPhoto.png?itok=rnFsXJf5"
              // className="mw-100 mh-100"
          />
      </DemoAutoAdjust>
    );
  }
}

export default App;
