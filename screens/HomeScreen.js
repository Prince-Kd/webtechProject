import React, {useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Button
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import Notification from './Notification';

export default function Home ({navigation, route}) {
  const[notifStatus, setNotifStatus] = useState(false);

  const toggleModal = () => {
    setNotifStatus(!notifStatus)
  };

  return(
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
          <Text style={{paddingTop: 20,fontSize:24, fontWeight: 'bold'}}>Home</Text>
        </View>
        <TouchableOpacity onPress={() => toggleModal()}>
          <Ionicons name='md-notifications-outline' size={40} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <ScrollView horizontal={true}>
          <View style={styles.slideShow}>
            <View>
              <Image style={styles.slides} source={require('../assets/images/slide1.png')}  />
              <Text style={styles.text1}>4855</Text>
              <Text style={styles.text2}>Confirmed Cases</Text>
            </View>
            <View>
              <Image style={styles.slides} source={require('../assets/images/slide2.png')}  />
              <Text style={{
                color:'white', 
                textAlign: 'right',
                fontSize: 24,
                fontWeight: 'bold',
                paddingRight: 12,
                paddingTop: 7,
                position: 'absolute',
                left: 245,
                top:8}}>465</Text>
              <Text style={{
                color:'white', 
                textAlign: 'right',
                paddingRight: 12,
                position: 'absolute',
                left: 220,
                top: 45}}>Recovered</Text>
            </View>
            <View>
            <Image style={styles.slides} source={require('../assets/images/slide3.jpg')}/>
              <Text style={{color:"white",  fontWeight: "bold",fontSize: 24, position: 'absolute', left: 252, top: 8}}>21</Text>
              <Text style={{color:"white", position: 'absolute', left: 235, top: 38}}>Deaths</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{padding: 10}}>
        <Text>
         
        </Text>
        </View>
      </ScrollView>
    </View>
  )
}

Home.navigationOptions = {
 header: null,
};

const styles = StyleSheet.create({
  root: {
        justifyContent:"center",
        paddingTop: StatusBar.currentHeight,
  },
  slideShow: {
    flexDirection:"row",
    backgroundColor: 'white'
  },
  slides: {
    margin: 8,  
    height: 160, 
    width: 290 , 
    borderRadius: 10, 
    borderColor: 'black',
    borderWidth: 1
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
  text1: {
    color:'white', 
    textAlign: 'right',
    fontSize: 24,
    fontWeight: 'bold',
    paddingRight: 12,
    paddingTop: 7,
    position: 'absolute',
    left: 232,
    top:8
  },
  text2: {
    color:'white', 
    textAlign: 'right',
    paddingRight: 12,
    position: 'absolute',
    left: 180,
    top: 45
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