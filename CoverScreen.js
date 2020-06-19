import React, {useState} from 'react';
import { View, StatusBar, StyleSheet, Button, TouchableOpacity, Text, TextInput, Image } from 'react-native';

export default function Cover() {
	const[number, setNumber] = useState();
	return(
		<View style={{flex:1, backgroundColor: "white", justifyContent: "center", alignItems: "center"}} >
			<Text style={{paddingDown: 15}}>COVERS</Text>
			<Text>(COVID-19 EMERGENCY RESPONSE SOLUTION)</Text>
			<Text>Join the effort by well-meaning Africans using technology to slow down and eventually halt the spread of COVID-19</Text>
			<TextInput 
			placeholder= "Phone number"
			keyboardType = "number-pad"
			value = {number}
			onChangeText={text => setNumber(text)}
			style={{paddingTop:22, paddingDown:4}}
			/>
			<TouchableOpacity style={{justifyContent: "center", alignItems: "center", backgroundColor: "gray"}}>
				<Text style={{color: "white"}}>Get Started</Text>
			</TouchableOpacity>
		</View>
	)
}