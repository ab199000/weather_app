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


    const [wether, setWether] = useState<IMyWether>() 
    useEffect(()=>{
    axios.get("http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=a4uQnXZVhfJ2140ChLWl2SXC8kxFZVo3&q=51.435117%2C%20%20-1.005089")
    .then((response)=>{
        console.log(response);
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
    })
    },[])


    return(
        <View>
            <div>
                <p>{wether?.Date}</p>
            </div>
        
        </View>
    )
}