import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function  NotificationsScreen({close}) {
	function sendClose(){
		close(false)
	}

  return (
  	<View style={styles.root}>
  		<TouchableOpacity onPress={() => sendClose()} style={{height: 24, width: 24, margin: 10}}>
      		<Ionicons name="md-close" size={24} style={{paddingLeft: 3.5}}/>
    	</TouchableOpacity>
  		<View style={styles.header}>
  			<Text style={{fontSize: 22}}>Notifications</Text>
  		</View>
  		
  	</View>
    
  )
}

const styles = StyleSheet.create({
	root: {
		justifyContent:"center",
	},
	header: {
		height: 50,
		borderTopColor: "#ccc",
		borderTopWidth: 0.8,
	    borderBottomColor: '#ccc',
	    borderBottomWidth: 0.8,
	    padding: 10,
	    justifyContent: 'center'
	}
})
