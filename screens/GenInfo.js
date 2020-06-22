import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet, StatusBar} from 'react-native';

export default function Information({navigation, route}) {
  const{item1} = route.params;
  console.log(item1);
  
	return(
		<View style={{flex:1}}>
			<View style={styles.header}>
				<Text style={{fontWeight: "bold", fontSize: 30}} >General Information</Text>
		    </View>
		    <ScrollView>
		    	<View style={{paddingHorizontal: 15, flex:1}} >
			    	<TouchableOpacity onPress={() => {
              navigation.navigate("Root",{Item1: item1})
            } } style={styles.start} >
			    		<Text style={{color: "white"}} >Lets get started...</Text>
			    	</TouchableOpacity>
		    	</View>
		    </ScrollView>
		</View>    
	)
}

const styles = StyleSheet.create({
  root: {
        justifyContent:"center",
        paddingTop: StatusBar.currentHeight,
        height: 200,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingHorizontal: 15
  },
  header: {
    paddingHorizontal: 15,
    height: 100,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    justifyContent: "flex-end"

  },
  start: {
  	backgroundColor: "black",
  	height: 50, 
  	paddingVertical: 15, 
  	justifyContent: "center", 
  	alignItems: "center" 
  } 
})