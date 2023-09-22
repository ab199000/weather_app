import { useEffect, useState } from "react";
import axios from "axios";
import { IMyWether } from "../interfaces";

// export function getWeather() {
//   return {
//     wether: "wether",
//     airTemperature: "airTemperature",
//     country: "country",
//     fraze: "fraze",
//     weather12Hours: [], //weather12Hours,
//   };
// }

const getCountry = () => {
  const [country, setCountry] = useState();

  axios
    .get(
      "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&q=51.435117%2C%20%20-1.005089&language=ru"
    )
    .then((response) => {
      console.log(response);
      setCountry(response.data.LocalizedName);
    });
};

const getWeather = () => {
  const [weather, setWeather] = useState<IMyWether>();

  axios
    .get(
      "http://dataservice.accuweather.com/forecasts/v1/daily/1day/330396?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&details=true&metric=true"
    )
    .then((response) => {
      console.log(response.data.DailyForecasts[0]);
      // setWether(JSON.stringify(response.data))
      setWeather(response.data.DailyForecasts[0]);
      console.log(weather);
    });
};

const getTemperature = () => {
  const [airTemperature, setAirTemperature] = useState<any>();

  axios
    .get(
      "http://dataservice.accuweather.com/currentconditions/v1/330396?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3"
    )
    .then((response) => {
      console.log(response);
      setAirTemperature(response.data[0].Temperature.Metric.Value);
    });
};

const getNightTemperature = () => {
  const [dayTemperature, setDayTemperature] = useState();
  const [nightTemperature, setNightTemperature] = useState();
  const [sunState, setSunState] = useState();

  axios
    .get(
      "http://dataservice.accuweather.com/forecasts/v1/daily/1day/298003?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&language=ru&metric=true"
    )
    .then((response) => {
      console.log(response);
      setDayTemperature(
        response.data.DailyForecasts[0].Temperature.Maximum.Value
      );
      setNightTemperature(
        response.data.DailyForecasts[0].Temperature.Minimum.Value
      );
      setSunState(response.data.DailyForecasts[0].Day.IconPhrase);
    });
};

const get12HoursWeather = () => {
  const [weather12Hours, setweather12Hours] = useState<any>();

  axios
    .get(
      "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/330396?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&metric=true"
    )
    .then((response) => {
      console.log(response.data);
      setweather12Hours(response.data);
      console.log(weather12Hours);
    });
};
