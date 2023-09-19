import { StyleSheet, StatusBar, Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';


interface IMyWether{
    Date: string,
    Day: {
        HasPrecipitation: boolean,
        IconPhrase: string,
        PrecipitationIntensity:string,
        PrecipitationType: string,
    },
    Night: {
        HasPreciputation: boolean,
        IconPhrase: string,
        PrecipitationIntensity: string,
        PrecipitationType: string,
    },
    Temperature: {
        Maximum: {
            Value: number,
            Unit: string,
        },
        Minimum: {
            Value: number,
            Unit: string,
        }
    }

}

export default function Wether(){
// 293006

    const [wether, setWether] = useState<IMyWether>()

    const [airTemperature, setAirTemperature] = useState<any>()
    const [country, setCountry] = useState()
    const [dayTemperature, setDayTemperature] = useState()
    const [nightTemperature, setNightTemperature] = useState()
    const [fraze, setFraze] = useState()



    useEffect(()=>{
    axios.get("http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&q=51.435117%2C%20%20-1.005089&language=ru")
    .then((response)=>{
        console.log(response);
        setCountry(response.data.LocalizedName)
    })

    axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/1day/330396?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&details=true&metric=true")
    .then((response)=>{
        console.log(response.data.DailyForecasts[0]);
        // setWether(JSON.stringify(response.data))
        setWether(response.data.DailyForecasts[0])
        console.log(wether);
        
    })

    axios.get("http://dataservice.accuweather.com/currentconditions/v1/330396?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3")
    .then((response)=>{
        console.log(response);
        setAirTemperature(response.data[0].Temperature.Metric.Value);
    })

    axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/1day/298003?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&language=ru&metric=true")
    .then((response)=>{
        console.log(response);
        setDayTemperature(response.data.DailyForecasts[0].Temperature.Maximum.Value)
        setNightTemperature(response.data.DailyForecasts[0].Temperature.Minimum.Value)
        setFraze(response.data.DailyForecasts[0].Day.IconPhrase)
    })

    },[])


    return(
        <View style={styles.card}>
            <View >
                <p>Город {country}</p>
                <p>{airTemperature} °С</p>
                <p>{fraze}</p>
            </View>
            <View style={styles.dn}>
                <div>
                    <p>Днём</p>
                    <p>{dayTemperature}</p>
                </div>
                <div>
                    <p>Ночью</p>
                    <p>{nightTemperature}</p>
                </div>
        
            </View>
        </View>
    )

    
}

const styles = StyleSheet.create({
  dn:{
    flex:1,
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
  },
  card:{
    padding: 10,
    borderColor:"black",
    flex:1,
    borderWidth:1,
    backgroundColor: "red",
    borderRadius:40,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }
});