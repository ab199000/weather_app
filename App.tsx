import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Wether from './components/wether/Wether';


export default function App() {
  return(
    <View style={styles.container}>
    <Wether/>
    </View>
  )
    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontSize:50
  }
});
