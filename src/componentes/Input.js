import  React  from 'react';
import { Text, View,TextInput, StyleSheet } from 'react-native';

const Input = ({ onChangeText, value }) =>(
  <TextInput 
   style={styles.input} 
   onChangeText={onChangeText} 
   value={value} />  
);

const styles = StyleSheet.create({
    input:{
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5,
    }
})

export default Input;