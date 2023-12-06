import { Text, View, ScrollView, RefreshControl, Image } from "react-native";
import { useEffect, useState } from "react";
import WeatherAtTheMoment from "../WeatherAtTheMoment/WeatherAtTheMoment";
import WeatherList from "../WeatherList/WeatherList";
import { getDailyForecast, getAirTemperature, get12HoursForecast, getCityData } from "../../requests/weather";
import { DailyForecast, I12HoursForecast } from "../../interfaces/weatherInterfaces";
import * as Location from 'expo-location';
import { ICityInfo } from "../../interfaces/locationInterfaces";
import { styles } from "./WetherWindow";




export default function WetherWindow() {
  // 293006
  const [wether, setWether] = useState<DailyForecast>();

  const [airTemperature, setAirTemperature] = useState<number>();
  const [weather12Hours, setweather12Hours] = useState<I12HoursForecast[]>();
  const [location, setLocation] = useState<Location.LocationObject>();
  const [cityData, setCityData] = useState<ICityInfo>();
  const [refreshing, setRefreshing] = useState<boolean>(false);


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

  async function getWeather(key: string) {
    if (!key) return;
    setRefreshing(true);

    await getDailyForecast(key)
      .then((resp) => {
        console.log(key);
        
        console.log(resp.data.DailyForecasts[0]);

        setWether(resp.data.DailyForecasts[0]);
      }).catch((err) => { console.error(err); });

    await getAirTemperature(key)
      .then((resp) => {
        console.log(resp.data[0].Temperature.Metric.Value);
        setAirTemperature(resp.data[0].Temperature.Metric.Value);

      }).catch((err) => { console.error(err); });

    await get12HoursForecast(key)
      .then((resp) => {
        console.log(resp);

        setweather12Hours(resp.data);
      }).catch((err) => { console.error(err); });


    setRefreshing(false);

  }

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    

    if (location) {
      let { latitude, longitude } = location?.coords;
      getCityData(latitude, longitude)
        .then((resp) => {
          console.log("CITY KEY:", resp.data.Key);
          setCityData(resp.data);
        }).catch((err) => { console.error(err); });
        return
    }

  }, [location]);

  useEffect(() => {

    if (!cityData?.Key) return;
    let { Key } = cityData;
    getWeather(Key);

  }, [cityData]);

  
  
  return (
    <View style={{
      paddingTop: 40,
      width: "100%", height: "100%"
    }}>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getPosition} />}>
        <View style={styles.card}>
          {cityData?.LocalizedName && wether?.Day.IconPhrase && airTemperature && weather12Hours?
            <WeatherAtTheMoment
              country={cityData?.LocalizedName}
              fraze={wether?.Day.IconPhrase}
              airTemperature={airTemperature}
              IconPhrase={weather12Hours[0].IconPhrase}
              setLocation={setLocation} />
            : <>
              <Text>Error</Text>
            </>}
          <View style={styles.line}></View>

          <WeatherList weather12Hours={weather12Hours} />
        </View>
      </ScrollView>
    </View>
  );
}
