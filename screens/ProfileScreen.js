import React, {useState} from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, StatusBar, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import Countries from './CountryPicker';


export default function  ProfileScreen({navigation}) {
	const [age, setAge] = useState()
	const [license, setLicense] = useState("");
	const [checked, setState] = useState();
	const [country1, setCountry1 ] = useState();
	const [country2, setCountry2 ] = useState();

	const getCountry = (value1, value2) => {
		setCountry1(value1);
		setCountry2(value2);
	}
 return (
  	
	<View style={styles.root}>
	<ScrollView>
		<Text style = {{fontWeight: 'bold'}}>Person Details</Text>
		<Text style={styles.text}>Enter Age</Text>
		<TextInput style = {styles.input}
		onChangeText={text => setAge(text)}
		value = {age}
		keyboardType = "number-pad"
		placeholder = "Age"
		/>
		<View style={{flexDirection:'row', alignItems: 'center', marginTop: 10}}>
	        <RadioButton
	          value="Male"
	          status={checked === 'Male' ? 'checked' : 'unchecked'}
	          onPress={() => { setState('Male'); }}
	        />
	        <Text>Male</Text>
	        <RadioButton
	          value="Female"
	          status={checked === 'Female' ? 'checked' : 'unchecked'}
	          onPress={() => { setState('Female') }}
	        />
	        <Text>Female</Text>
    	</View>
		<Text style={{fontWeight: 'bold', paddingTop: 10}}>Travel History</Text>
		<Text>Select the last two countries you visited (if Applicable)</Text>
		<View style= {styles.country}>
			<View style={styles.c1}>
				<Countries country1={getCountry}/>
			</View>
			<View style={styles.c1}>
				<Countries country2={getCountry}/>
			</View>
		</View>

		<Text style={{fontWeight: "bold"}}>Medical Professional Information</Text>
		<Text>Applicable if you are a health worker</Text>
		<Text style={{paddingTop: 20, paddingBottom: 10}}>Health License Number</Text>
		<TextInput
		onChangeText={text => setLicense(text)}
		value = {license}
		keyboardType = "number-pad"
		style={styles.input}
		/>

		<TouchableOpacity style={{backgroundColor: "black", height: 50, marginVertical: 20, justifyContent: "center", alignItems: "center"}}
		onPress={()=>{
			navigation.goBack();
			alert("Updated Successfully")
		}}>
			<Text style={{color: "white"}}>Update Profile</Text>
		</TouchableOpacity>
	</ScrollView>
	</View>
  )
}

 ProfileScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
	root: {
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 10,
        flex: 1

  	},
  	input: {
  		height: 50, 
  		borderColor: "gray",
  		borderWidth: 1,
  		paddingLeft: 12
	  },
	  country: {
	  	  marginVertical: 20,
		  flexDirection: 'row',
		  height: 130,
		  justifyContent: "space-between",
	  },
	  c1: {
		  borderWidth: 1,
		  borderColor: 'gray',
		  borderRadius: 10,
		  height: 130,
		  width: 160,
		  padding: 10,
		  justifyContent: "center",
		  alignItems: "center"
	  },
	  text: {
	  	paddingVertical: 10
	  },
	  check: {
	  	flexDirection: 'row',
	  	justifyContent:"space-around",
	  	width: 200,
	  	alignItems: 'center'

	  }
})