import { StyleSheet, StatusBar, Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { IUser } from '../../interfaces';
import axios from 'axios';

interface IProps{
    user: IUser;
}

export default function User(user:IProps){

  const [userInfo, setUserInfo] = useState<IUser>()

  useEffect(()=>{
    axios.get("https://randomuser.me/api")
      .then((response) => {
        setUserInfo(response.data.results[0])
      })
  },[])
    
    return(
    <View>
      <Image source = {{uri:user.user.picture.large}} style = {{ width: 200, height: 200 }} />
      <Text style={styles.textStyle}>{user?.user.name.first} {user?.user.name.last}</Text> 
    </View>
    )
}

const styles = StyleSheet.create({
  textStyle:{
    fontSize:50
  }
});