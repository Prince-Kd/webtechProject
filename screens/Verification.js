import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Verification({Root, verify, close, Info, contact}) {
	const[code, setCode] = useState();
	const navigation = useNavigation();
	const [warning, setWarning] = useState("");

	function sendCode() {
		verify(code);
	}



	return(
		<View style={{flex:1}}>
		<View style={{paddingTop: 10}}>
			<TouchableOpacity style={{paddingHorizontal: 15, flexDirection: "row", width: 200, height:30}} onPress={() => close(false)}>
				<Ionicons name="md-arrow-back" size={24} />
				<Text style={{paddingHorizontal: 15}}>Go Back</Text>
			</TouchableOpacity>
		</View>
		<View style={{backgroundColor: "white", flex:1, justifyContent: "center", alignItems: "center", paddingHorizontal: 15}} >
			<Text style={{fontWeight: "bold", fontSize: 24, paddingBottom: 20}} >Verification PIN</Text>
			<Text>Enter the verification code</Text>
			<Text>We just sent you on</Text>
			<Text>{contact}</Text>
			<TextInput 
				value={code}
				keyboardType= "number-pad"
				style={{marginVertical: 30, borderBottomWidth: 2, borderBottomColor: "black", width: 250, height: 40, textAlign: "center"}}
				onChangeText={text => setCode(text)}
			/>
			<TouchableOpacity style={{height: 50, width: 250, justifyContent: "center", alignItems: "center", backgroundColor: "black"}}
				onPress={()=> 
					{if(code == "09045"){
						navigation.navigate("Info")
						sendCode();
					}else{
						setWarning("Invalid verification code!!")
					}
				}
			}
			>
				<Text style={{color: "white"}}>Submit Code</Text>
			</TouchableOpacity>
			<Text style={{color: "red", paddingTop:10 }}>{warning}</Text>
			<Text></Text>
			<Text></Text>
		</View>
		</View>
		)
}