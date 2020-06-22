import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, StatusBar} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import gql from 'graphql-tag';
import { Mutation } from '@apollo/react-components';
import {VALIDATE} from '../Mutations';
import {MEMBERPROFILE} from '../Queries';

export default function Verification({navigation, route}) {
	const [code, setCode] = useState();
	const [warning, setWarning] = useState("");
	const [user, setUser] = useState({})

	const {contact} = route.params

	return(
		<Mutation 
		mutation={VALIDATE} 
		onCompleted={data => {
			console.log(data);
			let User = data.validateLoginUser.user;
			setUser(User);
			console.log(user)
			console.log(user._id)
          }}>
      	{(validateLoginUser) => (
			<View style={{flex:1, paddingTop: StatusBar.currentHeight}}>
				<View style={{paddingTop: 10}}>
					<TouchableOpacity style={{paddingHorizontal: 15, flexDirection: "row", width: 200, height:30}} onPress={() => navigation.goBack()}>
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
								validateLoginUser({variables: {phone: contact, otp: code}})
								navigation.navigate("Info", {item1: user._id})
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
			)}
      	</Mutation>
		)
}