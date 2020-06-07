import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function  NotificationsScreen() {
  return (
  	<View style={styles.root}>
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
	    borderBottomColor: '#ccc',
	    borderBottomWidth: 0.8,
	    padding: 10,
	    justifyContent: 'center'
	}
})
