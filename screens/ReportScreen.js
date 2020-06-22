import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, StatusBar, Image, TouchableOpacity, Modal, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Notification from './Notification';
import { RadioButton, FAB } from 'react-native-paper';
import { Mutation } from '@apollo/react-components';
import { useQuery } from '@apollo/react-hooks';
import {Report_Case} from '../Mutations';
import MakeReport from './makeReportScreen';


export default function  ReportScreen({navigation, route}) {    
    const [value, setValue] = useState(false);
    const[notifStatus, setNotifStatus] = useState(false);
    const [reports, setReports] = useState([]);
    const[modalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
      setNotifStatus(!notifStatus)
    };

    const back = (state) => {
    setModalVisible(state);
  };

    const getInfo = (item1, item2, item3) => {
      setReports(reports => reports.concat({reporting:item1, description: item2, contact: item3}))
      setValue(true)
    }

    const desc = []
    reports.forEach((report, i) => {
      desc.push(
      <View style={styles.card} key={i}>
        <View style={{flexDirection: "row"}}>
          <Text style={{paddingBottom: 20, fontWeight: "bold"}}>{report.reporting}</Text>
        </View>
        
        <Text>{report.description}</Text>
        <Text>{report.contact}</Text>
      </View>
      );
    });
    

    const Switch = () => {
      if(value === false){
        return(
          <Mutation mutation={Report_Case} 
          onCompleted={data => {
           }}>
            {(reportCase) => (
              <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
                <View style={{}}>
                    <Image source={require('../assets/images/file2.png')} style={{height: 190}}  />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text>You have not made any case reports</Text>
                  <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible) }>
                    <Text>Make Case Report</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Mutation>
        )
      }else if(value === true){
        /*const { loading, error, data } = useQuery(REPORTED_CASES, {variables: {reporting: "individual"}});
        if (loading) return(<Text>loADing</Text>);
        if (error) return (<Text>Error</Text>)
          console.log(data);*/
          return(
              <View style={{flex: 1, paddingBottom: 50}}>
                  {desc}
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
              animationType="slide"
              onRequestClose={() => setNotifStatus(!notifStatus)}
              visible={notifStatus}>
                <View style={styles.modalView}>
                  <Notification close = {back}/>
                </View>
            </Modal>
            <View style={styles.header}>
              <View style={{flexDirection: 'column', flex:1 }}>
                <TouchableOpacity style={styles.logo} onPress={() => navigation.navigate('Profile')}>
                  <Image source={require('../assets/images/avatar.png')} style={styles.logo}/>
                </TouchableOpacity>
                <Text style={{paddingTop: 20,fontSize:24, fontWeight: 'bold'}}>Case Reports</Text>
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
                  <MakeReport close = {back} Reports = {getInfo}/>
            </Modal>  
        </View>
      )
}
  
  const styles = StyleSheet.create({
    root: {
        justifyContent:"center",
        paddingTop: StatusBar.currentHeight,
  },
  header: {
    paddingHorizontal: 15,
    height: 100,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    flexDirection: 'row'
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
  logo: {
    height: 40, 
    width: 40, 
    borderRadius: 40, 
    borderColor: '#ccc', 
    borderWidth:1,
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
  fab: {
    position: 'absolute',
    left: 330,
    top: 430,
    backgroundColor: "black"
  },
  card: {
    height: 120,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10
  }
  });