import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Story from './component/story';
import { Entypo } from '@expo/vector-icons';  
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor = "black" style='light' translucent={true}/>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('./images/1916604.png')}
        />
      </View>
      <View style={styles.stories}>
        <Story />
      </View>
      <View style={styles.bottom}>
        <Entypo name='home' size={30} color='white' />
        <FontAwesome name='bars' size={30} color='grey' />
        <Ionicons name='ios-notifications' size={30} color='grey' />
        <Ionicons name='ios-settings' size={30} color='grey'  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    width: screenWidth,
    height: screenHeight*0.08,
    marginTop: 20,
  },
  logo: {
    width: screenWidth*0.25,
    height: screenHeight*0.1,
    marginLeft: 20,
    resizeMode: "contain"
  },
  stories:{
    backgroundColor: '#000',
    margin: 2,
    flex:1
  },
  bottom:{
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around' 
  }
});
