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
interface IProps{
  country:string,fraze:string,airTemperature:number,IconPhrase:any
}
export default function WeatherAtTheMoment({country,fraze,airTemperature,IconPhrase}:IProps) {
  useEffect(()=>{
    
    // console.log("COUNTRY:", country);
    
  },[])

  function choosPicture(IconPhrase:any){
    return IconPhrase.toLowerCase();
  }
  
  return (
    <View>
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
