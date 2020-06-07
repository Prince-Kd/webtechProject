import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, StatusBar, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import Notification from './Notification';

export default function  ReportScreen({navigation}) {
    const [report, setReport] = useState('You have not made any case reports');
    const[notifStatus, setNotifStatus] = useState(false);

    const toggleModal = () => {
      setNotifStatus(!notifStatus)
    };
    return (
    <View style={styles.root}>
        <StatusBar/>
        <Modal 
          isVisible={notifStatus}
          onSwipeComplete={() => setNotifStatus(false)}
          hasBackdrop={true}
          backdropColor='black'
          swipeDirection="down"
          backdropOpacity={0.7}>
            <View style={styles.modalView}>
              <Notification/>
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
        <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
            <View style={{}}>
                <Image source={require('../assets/images/file2.png')} style={{height: 190}}  />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>{report}</Text>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('MakeReport')}}>
                    <Text>Make Case Report</Text>
                </TouchableOpacity> 
            </View>
            
            

        </View>

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
  }
  });