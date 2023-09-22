import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function WeatherList({
  weather12Hours,
}: {
  weather12Hours: any;
}) {
  let arr = [
    { DateTime: "8:00", Temperature: { Value: 13 } },
    { DateTime: "9:00", Temperature: { Value: 13 } },
    { DateTime: "10:00", Temperature: { Value: 13 } },
    { DateTime: "11:00", Temperature: { Value: 13 } },
  ];
  return (
    <View>
      <ScrollView style={styles.list} horizontal={true}>
        {arr?.map((element: any, index: number) => {
          console.log(element);

          return (
            <View style={styles.listItem}>
              <Text
                style={{
                  fontSize: 20,
                  color: "#FFFFFF",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {element.DateTime.slice(11, 16)}
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
                {element.Temperature.Value}°
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
    maxWidth: 150,
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
