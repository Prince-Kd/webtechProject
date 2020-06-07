import React, {useState} from 'react';
import { Image, Text, ScrollView, StyleSheet, View, StatusBar, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import Notification from './Notification';

export default function SettingsScreen({navigation}) {
  const[notifStatus, setNotifStatus] = useState(false);

  const toggleModal = () => {
    setNotifStatus(!notifStatus)
  };
  return (
    <ScrollView>
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
              
              <Text style={{paddingTop: 20,fontSize:24, fontWeight: 'bold'}}>Settings</Text>
            </View>
            <TouchableOpacity onPress={() => toggleModal()}>
              <Ionicons name='md-notifications-outline' size={40} />
            </TouchableOpacity> 
          </View>
              <View>
                <TouchableOpacity style={styles.assessments}>
                  <View style={styles.texts}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Self Assessment</Text>
                    <Text>Ascertain your covid-19 risk using our screening tool</Text>
                  </View>
                  <View style={styles.arrow}>
                    <Ionicons name='md-arrow-dropright' size={24}/>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.assessments}>
                  <View style={styles.texts}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>FAQs</Text>
                    <Text>Get answers to Frquently Asked Questions</Text>
                  </View>
                  <View style={styles.arrow}>
                    <Ionicons name='md-arrow-dropright' size={24}/>
                  </View>
                 </TouchableOpacity> 
                <TouchableOpacity style={styles.assessments}>
                  <View style={styles.texts}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Testing Centres</Text>
                    <Text>View testing centres near you</Text>
                  </View>
                  <View style={styles.arrow}>
                    <Ionicons name='md-arrow-dropright' size={24}/>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.assessments}>
                  <View style={styles.texts}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Personal Details</Text>
                    <Text>View and update your personal details</Text>
                  </View>
                  <View style={styles.arrow}>
                    <Ionicons name='md-arrow-dropright' size={24}/>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.assessments}>
                  <View style={styles.texts}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Audio</Text>
                    <Text>Listen to audio</Text>
                  </View>
                  <View style={styles.arrow}>
                    <Ionicons name="md-arrow-dropright" size={24}/>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.assessments}>
                  <View style={styles.texts}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Privacy Policy</Text>
                    <Text>View our privacy policy</Text>
                  </View>
                  <View style={styles.arrow}>
                    <Ionicons name='md-arrow-dropright' size={24}/>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.assessments}>
                  <View style={styles.texts}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Share</Text>
                    <Text>Share this app with friends and family</Text>
                  </View>
                  <View style={styles.arrow}>
                    <Ionicons name='md-arrow-dropright' size={24}/>
                  </View>
                </TouchableOpacity>
              </View>
      </View>
    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    height: 100,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    flexDirection: 'row'
  },
  root: {
    justifyContent:"center",
    paddingTop: StatusBar.currentHeight,
  },
  assessments: {
    paddingHorizontal: 15,
    height: 80,
    borderTopColor: '#ccc',
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5
  },
  arrow: {
    flex: 1,
  },
  texts: {
    flex: 20
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
