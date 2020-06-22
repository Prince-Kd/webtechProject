import React, {useState} from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, StatusBar, TouchableOpacity, Center } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RadioButton, FAB } from 'react-native-paper';

export default function  MakeReportScreen({navigation, close, Reports}) {
  const [value, setValue] = useState("");
  const [landmark, setLandmark] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [checked, setState] = useState();
  const[code, setCode] = useState();

  const sendInfo = () => {
    Reports(checked, description, contact);
  }

  

  return (
  <View style={styles.root}>
    <TouchableOpacity onPress={() => close(false)} style={{height: 24, width: 24, marginBottom: 10}}>
      <Ionicons name="md-close" size={24}/>
    </TouchableOpacity>
  <ScrollView>
  	<Text>Who are you reporting?</Text>
    <View style={{flexDirection:'row', alignItems: 'center'}}>
          <RadioButton
            value="self"
            status={checked === 'self' ? 'checked' : 'unchecked'}
            onPress={() => { setState('self'); }}
          />
          <Text>Self</Text>
          <RadioButton
            value="Individual"
            status={checked === 'Individual' ? 'checked' : 'unchecked'}
            onPress={() => { setState('Individual') }}
          />
          <Text>Individual</Text>
      </View>
    
      <Text style={{paddingTop: 10}}>Location or Digital Address</Text>
      <TextInput
        style = {styles.age}
        onChangeText={text => setLocation(text)}
        value = {location}
        placeholder = "eg. GA-492-74"
        
      />
      <View style={styles.check}>
        <View style={{flex: 1}}>
          <Text>Nearest Landmark</Text>
          <TextInput
            style = {styles.loc}
            onChangeText={text => setLandmark(text)}
            value = {landmark}
            placeholder = "eg. Oyibi Clinic"
            
          />
        </View>
        <View style={{flex: 1, paddingLeft: 10}}>
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
        style = {{alignItems: "flex-start", height: 150,borderColor: "#ccc",borderWidth: 1,borderRadius: 5, padding: 10}}
        onChangeText={text => setDescription(text)}
        value = {description}
        placeholder = "Type Something"
        
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.btn} onPress={()=> {
          if(description !== null){
            sendInfo();
            close(false)
          }
           }}>
          <Text style={{color: "white"}}>Report Case</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
      flex: 1,
      borderRadius: 5,
      padding: 10
    },
    btn: {
      width: 200,
      backgroundColor: "black",
      justifyContent: "center", 
      alignItems: "center",
      marginTop: 100,
      height: 50
    }
  	
})
