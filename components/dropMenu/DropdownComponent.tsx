import { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { getCountryesNames, searchCity } from '../../requests/weather';


  let data:Array<any> = [
  ]; 



  const DropdownComponent = ({cityName,setLocation}:any) => {
    const [value, setValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    const [country, setcountry] = useState([]);


    async function getNames(){
      await getCountryesNames()
      .then((resp) => {     
        setcountry(resp.data);
      }).catch((err) => { console.error(err); });

    }

    async function searchCityOnName(nameCity:string){
      console.log(nameCity);
      
      await searchCity(nameCity)
      .then((resp)=>{
        console.log(resp.data[0].GeoPosition.Latitude, resp.data[0].GeoPosition.Longitude);
        console.log(resp);
        
        setLocation({
          coords:{
            latitude: resp.data[0].GeoPosition.Latitude,
            longitude: resp.data[0].GeoPosition.Longitude,
          }
        })
      }).catch((err) => { console.error(err); })
    }

    useEffect(() => {
      getNames()
      
      if(country.length != 0){
        console.log(country);
        
      }
      
    }, []);



    if(country.length != 0){
      console.log(data);
      data = []
      for(let i = 0; i < country.length; i++){
        data.push({ label: `${country[i].LocalizedName}`, value: `${country[i].LocalizedName}` })
      }
      
      return (
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={400}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? `${cityName}` : `${cityName}`}
          searchPlaceholder="Поиск..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            searchCityOnName(item.value)
          }}
        />
      </View>
    )};
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#a9a9a9',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: '#a9a9a9',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });