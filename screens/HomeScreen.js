import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import SubjectButton from '../components/SubjectButton';
import Rating from '../components/Rating';
export default class HomeScreen extends React.Component {
  goto(target) {
    this.props.navigation.navigate(target);
  }
  render() {
    return (
      <View>
        <AppHeader title="News Letter" />
        <SubjectButton
          title="Read a Joke"
          onPress={() => {
            this.goto('JokeScreen');
          }}
        />
        <SubjectButton
          title="Horoscope"
          onPress={() => {
            this.goto('HoroscopeScreen');
          }}
        />
        <SubjectButton
          title="Weather"
          onPress={() => {
            this.goto('WeatherScreen');
          }}
        />
        <SubjectButton
          title="Top News"
          onPress={() => {
            this.goto('TopNewsScreen');
          }}
        />
      
      </View>
    );
  }
}
