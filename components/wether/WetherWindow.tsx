import { StyleSheet, Text, View, ScrollView, RefreshControl } from "react-native";
import { useEffect, useState } from "react";
import WeatherAtTheMoment from "../WeatherAtTheMoment/WeatherAtTheMoment";
import WeatherList from "../WeatherList/WeatherList";
import axios from "axios";
import { getDailyForecast, getAirTemperature, getCity, get12HoursForecast, getCityData } from "../../requests/weather";
import { DailyForecast, I12HoursForecast, IAirTemperature } from "../../interfaces/weatherInterfaces";

import { keyLocation } from "../../variables";

import * as Location from 'expo-location';
import { ICityInfo } from "../../interfaces/locationInterfaces";

import BackgroundGeolocation from 'react-native-background-geolocation';



export default function WetherWindow() {
  // 293006

  const [wether, setWether] = useState<DailyForecast>();

  const [airTemperature, setAirTemperature] = useState<number>();
  const [country, setCountry] = useState<string>();
  // const [dayTemperature, setDayTemperature] = useState<number>();
  // const [nightTemperature, setNightTemperature] = useState<number>();
  // const [fraze, setFraze] = useState<string>();
  const [weather12Hours, setweather12Hours] = useState<I12HoursForecast[]>();

  const [location, setLocation] = useState<Location.LocationObject>();
  const [cityData, setCityData] = useState<ICityInfo>()

  const [refreshing, setRefreshing] = useState<boolean>(false)

  async function getPosition() {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);

    setLocation(location);
  }

  async function getWeather(key:string) {
    if (!key) return
      setRefreshing(true)
      // getCity(cityData?.Key) //получение города
      //   .then((resp) => {
      //     console.log(resp.data.LocalizedName);
      //     setCountry(resp.data.LocalizedName);
      //   }).catch((err) => { console.error(err) });

      await getDailyForecast(key)
        .then((resp) => {
          setWether(resp.data.DailyForecasts[0]);
          // setFraze(resp.data.DailyForecasts[0].Day.IconPhrase)
          // setDayTemperature(resp.data.DailyForecasts[0].Temperature.Maximum.Value)
          // setNightTemperature(resp.data.DailyForecasts[0].Temperature.Minimum.Value)

        }).catch((err) => { console.error(err) });

      await getAirTemperature(key)
        .then((resp) => {
          console.log(resp.data[0].Temperature.Metric.Value);
          setAirTemperature(resp.data[0].Temperature.Metric.Value);

        }).catch((err) => { console.error(err) });

      await get12HoursForecast(key)
        .then((resp) => {
          setweather12Hours(resp.data);
        }).catch((err) => { console.error(err) });


    setRefreshing(false)

  }

  useEffect(() => {
    getPosition()
  }, [])

  useEffect(() => {
    if (location) {
      let { latitude, longitude } = location?.coords
      getCityData(latitude, longitude)
        .then((resp) => {
          console.log("CITY KEY:", resp.data.Key);
          setCityData(resp.data)
        }).catch((err) => { console.error(err) });
    }

  }, [location])

  useEffect(() => {
    
    if(!cityData?.Key)return
    let {Key}= cityData
    getWeather(Key)

  }, [cityData])


  return (
    <View style={{ paddingTop: 50 }}>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getPosition} />}>
        <View style={styles.card}>
          {cityData?.LocalizedName && wether?.Day.IconPhrase && airTemperature ?
            <WeatherAtTheMoment
              country={cityData?.LocalizedName}
              fraze={wether?.Day.IconPhrase}
              airTemperature={airTemperature}
            />
            : <></>
          }
          <View style={styles.line}></View>

          <WeatherList weather12Hours={weather12Hours} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#A9A9A9",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    height: 500,
    marginHorizontal: 10
  },

  list: {
    maxWidth: 150,
    maxHeight: 120,
    marginLeft: 20,
    marginRight: 20,
  },
  listItem: {
    paddingRight: 15,
  },
  line: {
    minHeight: 1,
    minWidth: 100,

    backgroundColor: "white",

    marginBottom: 15,
    marginTop: 10,
  },
  textColor: {
    color: "#FFFFFF",
  },
});
