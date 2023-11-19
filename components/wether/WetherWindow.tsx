import { StyleSheet } from "react-native";
import axios from "axios";
import { getCity } from "../../requests/weather";
import { IAirTemperature } from "../../interfaces/weatherInterfaces";

import { keyLocation } from "../../variables";


import BackgroundGeolocation from 'react-native-background-geolocation';



export const styles = StyleSheet.create({
  card: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#A9A9A9",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    height: "100%",
    marginHorizontal: 10
  },

  list: {
    maxWidth: 150,
    maxHeight: 120,
    marginLeft: 20,
    marginRight: 20,
  },
  listItem: {
    paddingRight: 15,
  },
  line: {
    minHeight: 1,
    minWidth: 100,

    backgroundColor: "white",

    marginBottom: 15,
    marginTop: 10,
  },
  textColor: {
    color: "#FFFFFF",
  },
});
