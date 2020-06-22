import React, {useState} from 'react';
import { View, StatusBar, StyleSheet, Button, TouchableOpacity, Text, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Notification from './Notification';
import VITALS from './Vitals';
import LogVitals from './logVitals';
import { FAB } from 'react-native-paper';

export default function  VitalsScreen({navigation}) {
  const [vitals, setVitals] = useState(false);
  const[notifStatus, setNotifStatus] = useState(false);
  const [symptoms, setSymptoms] = useState([]);
  const[modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setNotifStatus(!notifStatus)
  };
  const back = (state) => {
    setModalVisible(state);
  };

  const getData = (item1, item2, item3, item4, item5, item6) => {
    setSymptoms(symptoms => symptoms.concat(
      {
        Sym1: item1,
        Sym2: item2,
        Sym3: item3,
        Sym4: item4,
        Sym5: item5,
        Sym6: item6
      }

    ))
    setVitals(true);
  }



  const Symptoms = []
  symptoms.forEach((symptom, i) => {
    Symptoms.push(
      <VITALS symp = {symptom}/>
      )
  })

  const Switch = () => {
      if(vitals === false){
        return(
          <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text>You have not logged your vitals yet..</Text>
              <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                <Text>Log Vitals</Text>
              </TouchableOpacity> 
            </View>
          </View>
        )
      }else if(vitals === true){
        return(
          <View style={{flex: 1, padding: 10}}>
            {Symptoms}
            <FAB
            style={styles.fab}
            icon="plus"
            color='white'
            onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
          )
      }};

  return (
  <View style={styles.root}>
    <StatusBar/>
      <Modal 
      visible={notifStatus}
      animationType="slide"
      onRequestClose={() => toggleModal()}
      >
            <View style={styles.modalView}>
              <Notification/>
            </View>
      </Modal>
      <View style={styles.header}>
          <View style={{flexDirection: 'column', flex:1 }}>
            <TouchableOpacity style={styles.logo} onPress={() => navigation.navigate('Profile')}>
              <Image source={require('../assets/images/avatar.png')} style={styles.logo}/>
            </TouchableOpacity>
            <Text style={{paddingTop: 20,fontSize:24, fontWeight: 'bold'}}>Vitals</Text>
            </View>
            <TouchableOpacity onPress={() => toggleModal()}>
              <Ionicons name='md-notifications-outline' size={40} />
            </TouchableOpacity>
        </View>
        {Switch()}
        <Modal 
        animationType="slide"
        onRequestClose={() => setModalVisible(!modalVisible)}
        visible={modalVisible}>
          <LogVitals close = {back} details = {getData}/>
        </Modal> 

  </View>
  )
}

 VitalsScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  root: {
        justifyContent:"center",
        paddingTop: StatusBar.currentHeight,
  },
   modalView: {
    borderRadius: 10,
    backgroundColor: 'white',
    flex: 1
  },
  modalBackdrop: {
    backgroundColor: '#000000aa',
    flex: 1
  },
  header: {
    paddingHorizontal: 15,
    height: 100,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    flexDirection: 'row'
  },
  logo: {
    height: 40, 
    width: 40, 
    borderRadius: 40, 
    borderColor: '#ccc', 
    borderWidth:1,
  },
  button: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 1,
      borderStyle: 'dashed',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: 180,
      marginTop: 10
   },
   fab: {
    position: 'absolute',
    left: 330,
    top: 430,
    backgroundColor: "black"
  },
})
