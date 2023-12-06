import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import SelectCountryScreen from "../dropMenu/DropdownComponent";
import DropdownComponent from "../dropMenu/DropdownComponent";
interface IProps{
  country:string,fraze:string,airTemperature:number,IconPhrase:any,setLocation:any
}
export default function WeatherAtTheMoment({country,fraze,airTemperature,IconPhrase,setLocation}:IProps) {
  useEffect(()=>{
    
    // console.log("COUNTRY:", country);
    
  },[])

  function choosPicture(IconPhrase:any){
    // const words = IconPhrase.split(' ')
    switch(IconPhrase.toLowerCase()) {
      case 'cloudy':  // if (x === 'value1')
        return 'cloudy'
        break
    
      case 'snow':  // if (x === 'value2')
        return 'snow'
        break
    
      default:
        return 'partly-sunny'
        break
    }
    // for(let i = 0; i<words.length;i++){
    //   if(words[i].toLowerCase() == 'snow' || words[i].toLowerCase() == 'cloudy'){
    //     return words[i].toLowerCase();
    //   }
    // }
    // return false
  }
  
  return (
    <View>
      <DropdownComponent cityName = {country} setLocation={setLocation}/>
      <View style={styles.location}>
          <Ionicons name="location-sharp" size={60} color="black" />
          <Text style={styles.countryLocation}>{country}</Text>
          
      </View>
      {/* <Text style={styles.country}>{country}</Text> */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop:60,
          marginBottom:60
          // flexDirection: "row",
        }}
      >
        <Ionicons name={IconPhrase? choosPicture(IconPhrase) : "partly-sunny"} size={90} color="black" />
        <Text
          style={{
            fontSize: 40,
            color: "#FFFFFF",
            fontWeight: "500",
            textAlign: "center",
            // marginLeft: 5,
          }}
        >
          {Math.round(airTemperature)}°
        </Text>
      </View>

      <Text
        style={{
          fontSize: 40,
          color: "#FFFFFF",
          fontWeight: "500",
          textAlign: "center",
          marginBottom:40,
        }}
      >
        {fraze}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  country: {
    fontSize: 40,
    color: "#FFFFFF",
    fontWeight: "700",
    textAlign: "center",
  },
  location:{
    flexDirection: 'row',
  },
  countryLocation:{
    fontSize: 40,
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
