import { StyleSheet, StatusBar, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Ionicons from '@expo/vector-icons/Ionicons';


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

    let array = [{time:"9:00",temper:"+17°"},
    {time:"10:00",temper:"+17°"},
    {time:"11:00",temper:"+17°"},
    {time:"12:00",temper:"+17°"}]

    return(
        // <View style={styles.card}>
        //     <View >
        //         <Text>Город {country}</Text>
        //         <Text>{airTemperature} °С</Text>
        //         <Text>{fraze}</Text>
        //     </View>
        //     <View style={styles.dn}>
        //         <View>
        //             <Text>Днём</Text>
        //             <Text>{dayTemperature}</Text>
        //         </View>
        //         <View>
        //             <Text>Ночью</Text>
        //             <Text>{nightTemperature}</Text>
        //         </View>
        
        //     </View>
        // </View>

        <View style={styles.card}>
            <View >
                <Text  style={styles.country}>{country}</Text>
                <View style={{alignItems: "center", justifyContent: "center",flexDirection:"row"}}>
                    <Ionicons name='partly-sunny' size={60} color='black' />
                    <Text style={{fontSize:40,color: "#FFFFFF",fontWeight: "500",textAlign:"center",marginLeft:5}}>{airTemperature}°</Text>
                </View>
                
                <Text style={{fontSize:40,color: "#FFFFFF",fontWeight: "500",textAlign:"center"}}>{fraze}</Text>
            </View>
        <View style={styles.line}>
        </View>
        <View >
            
            <ScrollView style={styles.list} horizontal={true}>
                <View style={styles.listItem}>
                    <Text style={{fontSize:20,color: "#FFFFFF",fontWeight: "500",textAlign:"center"}}>9:00</Text>
                    <Ionicons name='partly-sunny' size={50} color='black' />
                    <Text style={{fontSize:15,color: "#FFFFFF",fontWeight: "500",textAlign:"center"}}>+17°</Text>
                </View>

                {array.map(({time, temper})=>(
                    <View style={styles.listItem}>
                        <Text style={{fontSize:20,color: "#FFFFFF",fontWeight: "500",textAlign:"center"}}>{time}</Text>
                        <Ionicons name='partly-sunny' size={50} color='black' />
                        <Text style={{fontSize:15,color: "#FFFFFF",fontWeight: "500",textAlign:"center"}}>{temper}</Text>
                    </View>
                ))}

            </ScrollView>
        </View>
        </View>
    )

    
}

const styles = StyleSheet.create({
  card:{
    borderColor:"black",
    borderWidth:1,
    backgroundColor: "#A9A9A9",
    borderRadius:40,
    alignItems: "center",
    justifyContent: "center",

  },

    list:{
        maxWidth:150,
        maxHeight:120,
        marginLeft:20,
        marginRight:20
    },
    listItem:{
        paddingRight:15
    },
    line:{
        minHeight:1,
        minWidth: 100,
    
        backgroundColor:"white",
        
        marginBottom:15,
        marginTop:10
    },
    textColor:{
        color: "#FFFFFF",
    },
    country:{
        fontSize:40,
        color: "#FFFFFF",
        fontWeight: "700",
        textAlign:"center"
    }
});

