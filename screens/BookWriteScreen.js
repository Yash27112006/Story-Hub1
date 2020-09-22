import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, Header} from 'react-native';

export default class WriteScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{marginTop: 0}}>
          <Header
          centerComponent = {{text:'WRITE BOOK', style:{color:'black', fontSize: 24, fontWeight: '20px'}}}
          />
           <View style={{marginTop: -43}}>
           <Image style={{width: 65, height: 40, marginTop: 1, marginLeft: 3,
           }} source={require('../assets/write.png')} />
           </View>
           <View style={{marginTop: 3}}>
           <Image style={{width: 65, height: 40, marginTop: -43, marginLeft: 255,
           }} source={require('../assets/write.png')} />
          </View>
          </View>
          <TextInput
          style={styles.inputBox}
          placeholder="Name Of The Book"/><p></p>
          <TextInput
          style={styles.inputBox}
          placeholder="Pen Name"/><p></p>
          <TextInput
          style={styles.inputBox2}
          placeholder="Write Your Book"/><p></p>
          <TouchableOpacity 
              style={{width: 150, height: 50, backgroundColor: '#000000'}}>
              <Text style={styles.buttonText}>Scan</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  inputBox:{
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
  inputBox2:{
    width: 200,
    height: 150,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
  buttonText:{
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    color: "white"
  }
});