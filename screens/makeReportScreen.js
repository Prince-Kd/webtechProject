import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, StatusBar, TouchableOpacity, Center } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';

export default function  MakeReportScreen() {
  const [value, setValue] = useState("");
  const [landmark, setLandmarK] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
  return (
  <View style={styles.root}>
  	<Text>Who are you reporting?</Text>
    <View style={{alignItems:'center', flexDirection: 'row'}}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={() => toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)}
      />
      <Text style={{paddingRight: 20}}>Self</Text>
      <CheckBox
        disabled={false}
        value={toggleCheckBox1}
        onValueChange={() => toggleCheckBox1 ? setToggleCheckBox1(false) : setToggleCheckBox1(true)}
      />
      <Text>Other Individual</Text>
      </View>
      <Text style={{paddingTop: 10}}>Location or Digital Address</Text>
      <TextInput
        style = {styles.age}
        onChangeText={text => setLocation(text)}
        value = {location}
        placeholder = "eg. GA-492-74"
        
      />
      <View style={styles.check}>
        <View>
          <Text>Nearest Landmark</Text>
          <TextInput
            style = {styles.loc}
            onChangeText={text => setLandmarK(text)}
            value = {landmark}
            placeholder = "eg. Oyibi Clinic"
            
          />
        </View>
        <View>
          <Text>Alternate Contact</Text>
          <TextInput
            style = {styles.loc}
            onChangeText={text => setContact(text)}
            value = {contact}
            placeholder = "Contact Number"
            keyboardType = "number-pad"
            
          />
        </View>
      </View>
      <Text>Description</Text>
      <TextInput
        style = {{height: 150,borderColor: "#ccc",borderWidth: 1,borderRadius: 5, padding: 10}}
        onChangeText={text => setDescription(text)}
        value = {description}
        placeholder = "Type Something"
        
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{color: "white"}}>Report Case</Text>
        </TouchableOpacity>
      </View>
      
  </View>
  )
}

 MakeReportScreen.navigationOptions = {
  header: "Make Report"
};

const styles = StyleSheet.create({
	root: {
        justifyContent:"center",
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 10
  	},
    check: {
      flexDirection: 'row',
      justifyContent:"space-between",
      paddingVertical: 20
    },
    age: {
      height: 40, 
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 5,
      padding: 10
    },
    loc: {
      height: 40, 
      borderColor: "#ccc",
      borderWidth: 1,
      width: 180,
      borderRadius: 5,
      padding: 10
    },
    btn: {
      width: 180,
      backgroundColor: "black",
      justifyContent: "center", 
      alignItems: "center",
      marginTop: 100,
      height: 40
    }
  	
})
