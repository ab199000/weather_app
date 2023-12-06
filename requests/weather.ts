import { useEffect, useState } from "react";
import axios from "axios";
import { ICityInfo, ICountryesName, ILocation } from "../interfaces/locationInterfaces";
import { IDailyForecast, IAirTemperature, IWeatherOnDay, I12HoursForecast } from "../interfaces/weatherInterfaces";
import { api_key } from "../variables";

export function getCity(city_key: string) {
  // return axios.get<ILocation>(
  //   `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${api_key}&q=51.435117%2C%20%20-1.005089&language=ru`
  // )
}

export function getDailyForecast(city_key: string) {
  return axios.get<IDailyForecast>(
    `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${city_key}?apikey=${api_key}&details=false&metric=true&language=ru`
  )
}


export function getAirTemperature(city_key: string) {
  return axios.get<IAirTemperature[]>(
    `http://dataservice.accuweather.com/currentconditions/v1/${city_key}?apikey=${api_key}&language=ru`
  )
}

export function get12HoursForecast(city_key: string) {
  return axios.get<I12HoursForecast[]>(
    `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${city_key}?apikey=${api_key}&metric=true`
  )
}

export function getCityData(lat:number,lon:number){
  return axios.get<ICityInfo>(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${api_key}&q=${lat}%2C%20${lon}&language=ru`)
}


export function getCountryesNames(){
  return axios.get(`http://dataservice.accuweather.com/locations/v1/adminareas/RU?apikey=${api_key}&language=ru`)
}

export function searchCity(city:string){
  return axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${api_key}&q=${city}&language=ru`)
}