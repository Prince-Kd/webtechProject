import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, StatusBar, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';


export default function  ProfileScreen() {
	const [value, setValue] = useState("");
	const [toggleCheckBox, setToggleCheckBox] = useState(false)
	const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
  return (
	<View style={styles.root}>
		<Text style = {{fontWeight: 'bold'}}>Person Details</Text>
		<Text style={styles.text}>Enter Age</Text>
		<TextInput style = {styles.age}
		onChangeText={text => setValue(text)}
		value = {value}
		keyboardType = "number-pad"
		placeholder = " Age"
		/>
		<View style={styles.check}>
		  <CheckBox
		    disabled={false}
		    value={toggleCheckBox}
		    onValueChange={() => toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)}
		  />
		  <Text>Male</Text>
		  <CheckBox
		    disabled={false}
		    value={toggleCheckBox1}
		    onValueChange={() => toggleCheckBox1 ? setToggleCheckBox1(false) : setToggleCheckBox1(true)}
		  />
		  <Text>Female</Text>
      </View>
		<Text style={{fontWeight: 'bold', paddingTop: 10}}>Travel History</Text>
		<Text>Select the last two countries you visited (if Applicable)</Text>
		<View style= {styles.country}>
			<TouchableOpacity style={styles.c1} ></TouchableOpacity>
			<TouchableOpacity style={styles.c1} ></TouchableOpacity>
		</View>
		
		

	</View>
  )
}

 ProfileScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
	root: {
        justifyContent:"center",
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 10,
        justifyContent: "space-around",
        flexDirection: "column"

  	},
  	age: {
  		height: 40, 
  		borderColor: "gray",
  		borderWidth: 1
	  },
	  country: {
	  	  paddingVertical: 20,
		  flexDirection: 'row',
		  height: 80,
		  justifyContent: "space-around",
	  },
	  c1: {
		  borderWidth: 1,
		  borderColor: 'gray',
		  borderRadius: 10,
		  height: 130,
		  width: 130,
		  padding: 10
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