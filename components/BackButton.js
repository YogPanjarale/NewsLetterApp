import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class BackButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.back} onPress={this.props.onPress}>
        🔙
      </TouchableOpacity>
    );
  }
}
var styles = StyleSheet.create({
  back: {
    justifyContent: 'center',
    //marginTop: 125,
    fontSize: 30,
    marginLeft: 20,
    borderColor: 'black',
    fontFamily: 'Roboto',
    //  borderWidth: 5,
    width: 0,
    // borderRadius: 5,
    backgroundColor: '#99999999',
  },
});

export default BackButton;
