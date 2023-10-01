import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export type Props = {
  placeholder: string;
}

const Input: React.FC<Props> = ({
  placeholder
}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    paddingVertical:10,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
  },
});

export default Input