import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import CountryPicker, { getAllCountries, getCallingCode } from 'react-native-country-picker-modal';

export default function Countries() { 
  const[cca2, setCca2] = useState('US');
  const[country, setCountry] = useState();
    return (
      <View style={styles.container}>
        <CountryPicker
          onChange={value => {
            setCountry(value.name)
            setCca2(calue.cca2)
          }}
          cca2={country}
          translation='eng'
        />
        <Text>{cca2}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})