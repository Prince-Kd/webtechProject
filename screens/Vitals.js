import React, {useState} from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, StatusBar, TouchableOpacity, Center } from 'react-native';
import { FAB } from 'react-native-paper';

export default function Vitals({symp}) {

	function getVital(sym){
		switch(sym){
			case 0 : return(<Text>None</Text>);
				break;
			case 1 : return(<Text>Mild</Text>);
				break;
			case 2 : return(<Text>Mid</Text>);
				break;
			case 3 : return(<Text>Semi</Text>);
				break;
			case 4 : return(<Text>High</Text>);
				break;		
		}
	} 
	return(
		<View style={{marginHorizontal: 10}}>
			<Text></Text>
			<View style={{flexDirection: "row", justifyContent: "space-around", height: 80}}>
				<View style={{justifyContent: "center", alignItems: "center", backgroundColor: "green", flex: 1, margin: 5}}>
					<Text>Aches</Text>
					<Text style={styles.symno}>{symp.Sym1}</Text>
					{getVital(symp.Sym1)}
				</View>
				<View style={{justifyContent: "center", alignItems: "center", backgroundColor: "red", flex: 1, margin: 5}}>
					<Text>Breath Shortness</Text>
					<Text style={styles.symno}>{symp.Sym2}</Text>
					{getVital(symp.Sym2)}
				</View>
				<View style={{justifyContent: "center", alignItems: "center", backgroundColor: "aquamarine", flex: 1, margin: 5}}>
					<Text>Fever</Text>
					<Text style={styles.symno}>{symp.Sym3}</Text>
					{getVital(symp.Sym3)}
				</View>
			</View>
			<View style={{flexDirection: "row", justifyContent: "space-between", height: 80}}>
				<View style={{justifyContent: "center", alignItems: "center", backgroundColor: "aquamarine", flex: 1, margin: 5}}>
					<Text>Dry Cough</Text>
					<Text style={styles.symno}>{symp.Sym4}</Text>
					{getVital(symp.Sym4)}
				</View>
				<View style={{justifyContent: "center", alignItems: "center", backgroundColor: "orange", flex: 1, margin: 5}}>
					<Text>Tiredness</Text>
					<Text style={styles.symno}>{symp.Sym5}</Text>
					{getVital(symp.Sym5)}
				</View>
				<View style={{justifyContent: "center", alignItems: "center", backgroundColor: "violet", flex: 1, margin: 5}}>
					<Text>Sore Throat</Text>
					<Text style={styles.symno}>{symp.Sym6}</Text>
					{getVital(symp.Sym6)}
				</View>
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	symno: {
		color: "white",
		fontWeight: "bold"
	}
})