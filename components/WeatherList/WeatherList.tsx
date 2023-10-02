import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { I12HoursForecast } from "../../interfaces/weatherInterfaces";

interface IProps {
  weather12Hours: I12HoursForecast[] | undefined;
}

export default function WeatherList({
  weather12Hours,
}: IProps) {
  return (
    <View>
      <ScrollView style={styles.list} horizontal={true} showsHorizontalScrollIndicator={false}>
        {weather12Hours?.map(({ DateTime, Temperature }: I12HoursForecast, index: number) => {
          console.log(DateTime, Temperature);

          return (
            <View key={index} style={styles.listItem}>
              <Text
                style={{
                  fontSize: 20,
                  color: "#FFFFFF",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {new Date(DateTime).getHours()}:00

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
                {Math.round(Temperature.Value)}°
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    // maxWidth: 150,
    // marginHorizontal:10,
    maxHeight: 120,
    marginLeft: 20,
    marginRight: 20,
  },
  listItem: {
    paddingRight: 15,

  },
  textColor: {
    color: "#FFFFFF",
  },
});
