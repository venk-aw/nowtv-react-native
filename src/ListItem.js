import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center'
  },
  emailPlaceHolder: {
    minHeight: 18
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#dddddd',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBlock: {
    paddingLeft: 4
  },
  image: {
    width: 46,
    height: 46
  }
})

export default class ListItem extends Component {
  state = {
    showUserDetails: false
  }

  onMessageSelect = () => {
    this.setState({
      showUserDetails: true,
    });
  }

  hideUserDetails = () => {
    this.setState({
      showUserDetails: false
    });
  }

  render () {
    const {message, user} = this.props
    const {showUserDetails} = this.state
    return (
      <TouchableWithoutFeedback onPressIn={this.onMessageSelect} onPressOut={this.hideUserDetails} delayPressOut={1500}>
        <View style={styles.container}>
          <View style={styles.avatar}>
            {user && user.avatar && <Image source={{uri: user.avatar}} style={styles.image}/>}
          </View>
          <View style={styles.textBlock}>
            <Text>{message}</Text>
            <View style={styles.emailPlaceHolder}>
              {showUserDetails &&
                <Text>{user.email}</Text>
              }
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}