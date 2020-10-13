import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import { Audio } from 'expo-av';
// import db from '../firebase'

class SubjectButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={[styles.button]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginVertical: 8,
    marginLeft: 80,
    borderWidth: 1,
    borderColor: 'rgba(10,110,110)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 175,
    height: 50,
    backgroundColor: '#ffffff00',
    borderRadius: 15,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SubjectButton;
