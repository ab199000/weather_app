import { useEffect, useState } from "react";
import axios from "axios";
import { IMyWether } from "../interfaces";

export function getWeather() {
  const [weather, setWeather] = useState<IMyWether>();

  const [airTemperature, setAirTemperature] = useState<any>();
  const [country, setCountry] = useState();
  const [dayTemperature, setDayTemperature] = useState();
  const [nightTemperature, setNightTemperature] = useState();
  const [fraze, setFraze] = useState();
  const [weather12Hours, setweather12Hours] = useState<any>();

  //   axios
  //     .get(
  //       "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&q=51.435117%2C%20%20-1.005089&language=ru"
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       setCountry(response.data.LocalizedName);
  //     });

  //   axios
  //     .get(
  //       "http://dataservice.accuweather.com/forecasts/v1/daily/1day/330396?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&details=true&metric=true"
  //     )
  //     .then((response) => {
  //       console.log(response.data.DailyForecasts[0]);
  //       // setWether(JSON.stringify(response.data))
  //       setWeather(response.data.DailyForecasts[0]);
  //       console.log(weather);
  //     });

  //   axios
  //     .get(
  //       "http://dataservice.accuweather.com/currentconditions/v1/330396?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3"
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       setAirTemperature(response.data[0].Temperature.Metric.Value);
  //     });

  //   axios
  //     .get(
  //       "http://dataservice.accuweather.com/forecasts/v1/daily/1day/298003?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&language=ru&metric=true"
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       setDayTemperature(
  //         response.data.DailyForecasts[0].Temperature.Maximum.Value
  //       );
  //       setNightTemperature(
  //         response.data.DailyForecasts[0].Temperature.Minimum.Value
  //       );
  //       setFraze(response.data.DailyForecasts[0].Day.IconPhrase);
  //     });

  //   axios
  //     .get(
  //       "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/330396?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&metric=true"
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //       setweather12Hours(response.data);
  //       console.log(weather12Hours);
  //     });

  console.log({
    weather: weather,
    airTemperature: airTemperature,
    country: country,
    fraze: fraze,
    weather12Hours: weather12Hours,
  });
  return {
    weather: "[jhjij]", //weather,
    airTemperature: 13, //airTemperature,
    country: "город", //country,
    fraze: "fraze",
    weather12Hours: { DateTime: "8:00", Temperature: { Value: 13 } }, //weather12Hours,
  };
}
