import { View, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import Input from '../../components/Input';
import CustomButton from '../../components/Button';

const Login = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/logo.png')} style={[styles.logo, {height: height * 0.3}]}></Image>
      <Input placeholder='Email'/>
      <Input placeholder='Senha'/>
      <CustomButton/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    margin:0,
    alignItems: 'center',

  },
  logo: {
    width:'70%',
    maxWidth:700,
    maxHeight:500,
  },
});

export default Login;