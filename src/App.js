import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NativeModules
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getChatLog from './service'

class App extends Component {
  componentDidMount(){
    console.log("NativeModules", NativeModules)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
