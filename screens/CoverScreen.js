import React, {useState} from 'react';
import { View, StatusBar, StyleSheet, Button, TouchableOpacity, Text, TextInput, Image, Modal } from 'react-native';
import Verification from './Verification';
import {Mutation} from 'react-apollo';
import LoginUser from '../Mutations';

export default function Cover({navigation}) {
	const[number, setNumber] = useState();
	const[modalVisible, setModalVisible] = useState(false)
	const[count, setState] = useState();
	const[color, setColor] = useState("gray");
	const[warning, setWarning] = useState("");

	const getVerification = (code) => {
		if(code == "09045")
			setModalVisible(false); 
	};

	const back = (value) => {
		setModalVisible(value);
	}

	getCount = (text) =>{
      var Value = text.length.toString() ;
      setState(Value) ;
     }


	return(
		
				<View style={styles.root}>
					<Text style={{fontSize: 35, fontWeight: "bold"}} >COVERS</Text>
					<Text>(COVID-19 EMERGENCY RESPONSE SOLUTION)</Text>
					<Text>Join the effort by well-meaning Africans using technology to</Text>
					<Text>slow down and eventually halt the spread of COVID-19</Text>
					<TextInput 
					placeholder= "Phone number"
					keyboardType = "number-pad"
					value = {number}
					onChangeText={text =>{
						setNumber(text);
						getCount(text);
						if(count == 9){
							setColor("green")
						}else if (count != 9){
							setColor("gray")
						}
					}}
					maxLength = {10}
					style={styles.input}
					/>
					<TouchableOpacity style={{
			height: 50, 
			width: 350, 
			justifyContent: "center", 
			alignItems: "center", 
			backgroundColor: color
		}}
						onPress={()=> {
							if(number.length === 0){
								setWarning("Enter Number First!!");
							}else if(number.length > 0 && number.length < 10){
								setWarning("Enter a valid Number!!");
							}else{
								setModalVisible(!modalVisible)
							}
							
						}}
					>
						<Text style={{color: "white"}}>Get Started</Text>
					</TouchableOpacity>
					<Text style={{color:"red", paddingTop: 10}}>{warning}</Text>
					<Modal 
			          visible={modalVisible}
			        >
			       		<Verification verify = {getVerification} close = {back} contact = {number}/>
			      	</Modal>

				</View>
		
	)

}

const styles = StyleSheet.create({
		start: {
			height: 50, 
			width: 350, 
			justifyContent: "center", 
			alignItems: "center", 
		},
		input: {
			paddingLeft: 10, 
			marginTop:22, marginBottom:10, 
			borderRadius: 5, 
			borderColor: "black", 
			borderWidth: 1, 
			width: 350, 
			height: 50
		},
		root: {
			paddingHorizontal: 10, 
			flex:1, 
			backgroundColor: "white", 
			justifyContent: "center", 
			alignItems: "center"
		}
	})