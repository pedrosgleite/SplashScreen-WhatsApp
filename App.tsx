import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import icon from './assets/logo.png'

export const App = () => {
  return <View style={styles.container}>
    
  <Image
    source={icon}
    style={styles.image}   
  /> 
  <Text style={styles.texto}>from </Text>
  <Text style={styles.meta}>META</Text>
  
  </View>
};

export default App;