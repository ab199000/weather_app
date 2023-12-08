import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import WetherWindow from "./components/wether/WetherWindow.1";


export default function App() {
  return (
    <View style={styles.container}>
      <WetherWindow />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#dbe7ff",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop:10
  },
  textStyle: {
    fontSize: 50,
  },
});                                                               


