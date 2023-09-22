import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import WeatherAtTheMoment from "../WeatherAtTheMoment/WeatherHere";
import WeatherList from "../WeatherList/WeatherList";
import { getWeather } from "../../requests/weather";
import { IMyWether } from "../../interfaces";

export default function WetherWindow() {
  // 293006

  const [wether, setWether] = useState<IMyWether>();

  // const [airTemperature, setAirTemperature] = useState<any>();
  // const [country, setCountry] = useState();
  // const [dayTemperature, setDayTemperature] = useState();
  // const [nightTemperature, setNightTemperature] = useState();
  // const [fraze, setFraze] = useState();
  // const [weather12Hours, setweather12Hours] = useState<any>();

  const [weatherDan, setweatherDan] = useState<any>();
  useEffect(() => {
    setweatherDan(getWeather());
    // axios
    //   .get(
    //     "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&q=51.435117%2C%20%20-1.005089&language=ru"
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     setCountry(response.data.LocalizedName);
    //   });

    // axios
    //   .get(
    //     "http://dataservice.accuweather.com/forecasts/v1/daily/1day/330396?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&details=true&metric=true"
    //   )
    //   .then((response) => {
    //     console.log(response.data.DailyForecasts[0]);
    //     // setWether(JSON.stringify(response.data))
    //     setWether(response.data.DailyForecasts[0]);
    //     console.log(wether);
    //   });

    // axios
    //   .get(
    //     "http://dataservice.accuweather.com/currentconditions/v1/330396?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3"
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     setAirTemperature(response.data[0].Temperature.Metric.Value);
    //   });

    // axios
    //   .get(
    //     "http://dataservice.accuweather.com/forecasts/v1/daily/1day/298003?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&language=ru&metric=true"
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     setDayTemperature(
    //       response.data.DailyForecasts[0].Temperature.Maximum.Value
    //     );
    //     setNightTemperature(
    //       response.data.DailyForecasts[0].Temperature.Minimum.Value
    //     );
    //     setFraze(response.data.DailyForecasts[0].Day.IconPhrase);
    //   });

    // axios
    //   .get(
    //     "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/330396?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&metric=true"
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //     setweather12Hours(response.data);
    //     console.log(weather12Hours);
    //   });
  }, [weatherDan]);

  //   useEffect(() => {
  //     if (weather12Hours) {
  //       arr = weather12Hours?.map((e: any) => ({
  //         time: e.DateTime.slice(11, 16),
  //         temper: e.Temperature.Value,
  //       }));
  //     }
  //   }, [weather12Hours]);

  return (
    <View style={styles.card}>
      {/* <View>
        <Text style={styles.country}>{country}</Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons name="partly-sunny" size={60} color="black" />
          <Text
            style={{
              fontSize: 40,
              color: "#FFFFFF",
              fontWeight: "500",
              textAlign: "center",
              marginLeft: 5,
            }}
          >
            {airTemperature}°
          </Text>
        </View>

        <Text
          style={{
            fontSize: 40,
            color: "#FFFFFF",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {fraze}
        </Text>
      </View> */}
      <WeatherAtTheMoment
        country={"Калуга"} //{weatherDan.country}
        fraze={"Ясно"} //{weatherDan.fraze}
        airTemperature={13} //{weatherDan.airTemperature}
      />
      <View style={styles.line}></View>
      {/* <View>
        <ScrollView style={styles.list} horizontal={true}>
          {weather12Hours?.map((element: any, index: number) => {
            console.log(element);

            return (
              <View style={styles.listItem}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#FFFFFF",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  {element.DateTime.slice(11, 16)}
                </Text>
                <Ionicons name="partly-sunny" size={50} color="black" />
                <Text
                  style={{
                    fontSize: 15,
                    color: "#FFFFFF",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  {element.Temperature.Value}°
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View> */}

      <WeatherList weather12Hours={1} />
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
