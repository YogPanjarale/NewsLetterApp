import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';
import axios from 'axios';

export default class WeatherScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: '',
      loaded: false,
    };
  }
  componentDidMount() {
    this.getWeather();
    console.log('mounted');
  }
  getWeather() {
    const weatherURL = `https://fcc-weather-api.glitch.me/api/current?lat=27.2046&lon=77.4977`;
    fetch(weatherURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          weather: data,
          loaded: true,
        });
      });
  }
  render() {
    const DataDiv = () => {
      return (
        <View style={styles.dataDiv}>
          <Text style={styles.txt}>
            Weather : {this.state.weather.weather[0].description}
          </Text>
          <Text style={styles.txt}>
            WindSpeed : {this.state.weather.wind.speed} km/h
          </Text>
          <Text style={styles.txt}>
            Temprature : {this.state.weather.main.temp}°C
          </Text>
          <Text style={styles.txt}>
            MinTemaprature : {this.state.weather.main.temp_min}°C
          </Text>
          <Text style={styles.txt}>
            MaxTemaprature : {this.state.weather.main.temp_max}°C
          </Text>
          <Text style={styles.txt}>
            Pressure : {this.state.weather.main.pressure}hPa
          </Text>
          <Text style={styles.txt}>
            Humidity : {this.state.weather.main.humidity}%
          </Text>
        </View>
      );
    };
    return (
      <View>
        <BackButton
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}
        />

        {this.state.loaded ? <DataDiv /> : 'fetching'}
      </View>
    );
  } //        <Text>{this.state.weather.weather[0].main}</Text>
} //this.state.weather.weather[0].main
const styles = StyleSheet.create({
  dataDiv: {
    flex:1,
    alignContent:"center",
   padding:30,
  },
  txt: {
    fontSize: 20,
  
  },
});
