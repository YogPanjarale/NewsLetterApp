import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import AppHeader from './components/AppHeader';
// import SubjectButton from './components/SubjectButton';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import JokeScreen from './screens/JokeScreen';
import HoroscopeScreen from './screens/Horoscope';
import WeatherScreen from './screens/WeatherScreen';
import TopNewsScreen from './screens/TopNewsScreen';
import Rating from './components/Rating';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
        <Rating screen="" />
      </View>
    );
  }
}



var AppNavigator = createSwitchNavigator({
  WeatherScreen: WeatherScreen,
  HomeScreen: HomeScreen,
  JokeScreen: JokeScreen,
  HoroscopeScreen: HoroscopeScreen,

  TopNewsScreen: TopNewsScreen,
});
const AppContainer = createAppContainer(AppNavigator);
