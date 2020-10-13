import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';
export default class JokeScreen extends React.Component {
  render(){return (
    <View>
        <BackButton  onPress={()=>{ this.props.navigation.navigate('HomeScreen')}}/>
    <Text> {'This is JokeScreen'}</Text>
    </View>
  );}
}