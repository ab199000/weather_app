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
  country:string,fraze:string,airTemperature:number
}
export default function WeatherAtTheMoment({country,fraze,airTemperature}:IProps) {
  useEffect(()=>{
    
    // console.log("COUNTRY:", country);
    
  },[])
  return (
    <View>
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
});
