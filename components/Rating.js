import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import db from '../config';
export default class Rating extends React.Component {
  constructor() {
    super();
    this.state = {
      "likes": 0,
      "dislikes": 0,
    };
  }

  isLikePressed = () => {
    var rating = db.ref('/Rating/');
    var current;
    rating.on('value', (x) => {
      current = x;
    });
    rating.update({
      "likes": 1,
      "dislikes": 0,
    });
    this.setState({
      "likes": 1,
      "dislikes": 0,
    });
  };

  dislikePressed = () => {
 
    var rating = db.ref('/Rating/');
    var current;
    rating.on('value', (x) => {
      current = x;
    });
    rating.update({
      "likes": 0,
      "dislikes": 1,
    });
    this.setState({
      "likes": 0,
      "dislikes": 1,
    });
    
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Rate Us</Text>
        <View style={styles.thumb}>
          <TouchableOpacity onPress={this.isLikePressed}>
            <Image
              style={styles.image}
              source={require('../assets/thumbsup.png')}
            />
            <Text>{this.state.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.dislikePressed}>
            <Image
              style={[styles.image]}
              source={require('../assets/thumbsdown.png')}
            />
            <Text>{this.state.dislikes}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  thumb: {
    //backgroundColor: '#e3e3e3',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    marginHorizontal: 80,
    marginTop: 50,
    width: 200,
    //alignItems: 'center',
    // backgroundColor: 'grey',
  },

  text: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 15,
    // backgroundColor: '#989830',
    marginBottom: 12.5,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
  },
});
