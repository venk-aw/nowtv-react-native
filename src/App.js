import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getChatLog, getUsers} from './service'
import ListItem from './ListItem';

class App extends Component {
  state = {
    timestamp: null
  };

  componentDidMount(){
    NativeModules.RNMyTimestamp.getTimeStamp((timestamp) => {
      this.setState({
        timestamp
      })
    }, (err) => { console.warn('Failed to get timestamp', err); });
    this.props.getChatLog()
    this.props.getUsers()
  }

  render() {
    const {messages, users} = this.props
    const {timestamp} = this.state
    return (
      <View style={styles.container}>
        {timestamp && <View style={styles.welcome}>
            <Text>TimeStamp: {timestamp}</Text>
            <Text>Date: {Date(parseInt(timestamp))}</Text>
          </View>
        }
        <FlatList
          data={messages}
          renderItem={item => <ListItem
            {...item.item}
            user={users[item.item.userId]}
            getUser={this.getUserById} /> }
          keyExtractor={item => item.id} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages || [],
    users: state.users || {}
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog, getUsers }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    margin: 10
  }
});
