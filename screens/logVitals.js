import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar} from 'react-native';
import RadioGroup,{Radio} from "react-native-radio-input";
import { Ionicons } from '@expo/vector-icons';

export default function logVitals({details, close}) {
	const [sym1, setSym1] = useState();
	const [sym2, setSym2] = useState();
	const [sym3, setSym3] = useState();
	const [sym4, setSym4] = useState();
	const [sym5, setSym5] = useState();
	const [sym6, setSym6] = useState();

	const getChecked1 = (value) => {
		setSym1(value);
	}
	const getChecked2 = (value)=> {
		setSym2(value);
	}
	const getChecked3 = (value)=> { 
		setSym3(value);
	}
	const getChecked4 = (value)=> { 
		setSym4(value);
	}
	const getChecked5 = (value)=> { 
		setSym5(value);
	}
	const getChecked6 = (value)=> { 
		setSym6(value);
	}

	const sendDetails = () => {
		details(sym1, sym2, sym3, sym4, sym5, sym6);
	}

	
	
	
	
	

return(
	<View style={styles.root}>
		<TouchableOpacity onPress={() => close(false)} style={{height: 24, width: 24, marginBottom: 10}}>
	      <Ionicons name="md-close" size={24}/>
	    </TouchableOpacity>
		<ScrollView>
		<View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
			<View style={styles.card}>
				<Text style={styles.title} >Dry Cough</Text>
				<View>
					<RadioGroup getChecked={getChecked1} IconStyle={{fontSize:30}} RadioGroupStyle={{flexDirection:"row", justifyContent: "space-between", justifyContent: "space-between"}} RadioStyle={{flexDirection: "column"}}>
					    <Radio iconName={"lens"} label={"None"} value={0}/>
					    <Radio iconName={"lens"} label={"Mild"} value={1}/>
					    <Radio iconName={"lens"} label={"Mid"} value={2}/>
					    <Radio iconName={"lens"} label={"Semi"} value={3}/>
					    <Radio iconName={"lens"} label={"High"} value={4}/>
					</RadioGroup>
				</View>
			</View> 
			<View style={styles.card}>
				<Text style={styles.title}>Tiredness</Text>
				<View>
					<RadioGroup getChecked={getChecked2} IconStyle={{fontSize:30}} RadioGroupStyle={{flexDirection:"row", justifyContent: "space-between"}} RadioStyle={{flexDirection: "column"}}>
					    <Radio iconName={"lens"} label={"None"} value={0}/>
					    <Radio iconName={"lens"} label={"Mild"} value={1}/>
					    <Radio iconName={"lens"} label={"Mid"} value={2}/>
					    <Radio iconName={"lens"} label={"Semi"} value={3}/>
					    <Radio iconName={"lens"} label={"High"} value={4}/>
					</RadioGroup>				
				</View>
			</View>
			<View style={styles.card}>
				<Text style={styles.title}>Sore Throat</Text>
				<View>
					<RadioGroup getChecked={getChecked3} IconStyle={{fontSize:30}} RadioGroupStyle={{flexDirection:"row", justifyContent: "space-between"}} RadioStyle={{flexDirection: "column"}}>
					    <Radio iconName={"lens"} label={"None"} value={0}/>
					    <Radio iconName={"lens"} label={"Mild"} value={1}/>
					    <Radio iconName={"lens"} label={"Mid"} value={2}/>
					    <Radio iconName={"lens"} label={"Semi"} value={3}/>
					    <Radio iconName={"lens"} label={"High"} value={4}/>
					</RadioGroup>
				</View>
			</View>
			<View style={styles.card}>
				<Text style={styles.title}>Fever</Text>
				<View>
					<RadioGroup getChecked={getChecked4} IconStyle={{fontSize:30}} RadioGroupStyle={{flexDirection:"row", justifyContent: "space-between"}} RadioStyle={{flexDirection: "column"}}>
					    <Radio iconName={"lens"} label={"None"} value={0}/>
					    <Radio iconName={"lens"} label={"Mild"} value={1}/>
					    <Radio iconName={"lens"} label={"Mid"} value={2}/>
					    <Radio iconName={"lens"} label={"Semi"} value={3}/>
					    <Radio iconName={"lens"} label={"High"} value={4}/>
					</RadioGroup>
				</View>
			</View>
			<View style={styles.card}>
				<Text style={styles.title}>Aches and Pains</Text>
				<View>
					<RadioGroup getChecked={getChecked5} IconStyle={{fontSize:30}} RadioGroupStyle={{flexDirection:"row", justifyContent: "space-between"}} RadioStyle={{flexDirection: "column"}}>
					    <Radio iconName={"lens"} label={"None"} value={0}/>
					    <Radio iconName={"lens"} label={"Mild"} value={1}/>
					    <Radio iconName={"lens"} label={"Mid"} value={2}/>
					    <Radio iconName={"lens"} label={"Semi"} value={3}/>
					    <Radio iconName={"lens"} label={"High"} value={4}/>
					</RadioGroup>
				</View>
			</View>
			<View style={styles.card}>
				<Text style={styles.title}>Shortness of Breath</Text>
				<View>
					<RadioGroup getChecked={getChecked6} IconStyle={{fontSize:30}} RadioGroupStyle={{flexDirection:"row", justifyContent: "space-between"}} RadioStyle={{flexDirection: "column"}}>
					    <Radio iconName={"lens"} label={"None"} value={0}/>
					    <Radio iconName={"lens"} label={"Mild"} value={1}/>
					    <Radio iconName={"lens"} label={"Mid"} value={2}/>
					    <Radio iconName={"lens"} label={"Semi"} value={3}/>
					    <Radio iconName={"lens"} label={"High"} value={4}/>
					</RadioGroup>
				</View>
			</View>
			<TouchableOpacity style={styles.button} onPress={()=>{
				sendDetails();
				close(false);
				alert("Vitals Logged");

			}} >
				<Text style={{color: "white"}}>Log vitals</Text>
			</TouchableOpacity>
		</View>
		</ScrollView>
	</View>
	)
}

const styles = StyleSheet.create({
	card: {
		height: 100,
		width: 350,
		justifyContent: "space-between",
		margin: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10
	},
	root: {
        justifyContent:"center",
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 10
  	},
	title: {
		fontWeight: 'bold'
	},
	button:{
		height: 50, 
		backgroundColor: "black", 
		width: 350, 
		justifyContent: "center", 
		alignItems: "center",
		marginBottom: 50
	}

})