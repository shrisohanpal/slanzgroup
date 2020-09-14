import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const ContactScreen = props => {

  return (
    <ScrollView style={styles.container}>
      <TextInput placeholder="Name" style={styles.textInput}/>
      <TextInput placeholder="Phone" style={styles.textInput}/>
      <TextInput placeholder="Email" style={styles.textInput}/>
      <TextInput placeholder="Message" style={styles.textInput}/>
      <TouchableOpacity style={{alignSelf:'center',marginTop:20, borderRadius:10, backgroundColor:'#0000FF', elevation:5,shadowOpacity:1,shadowColor:'#000000'}} onPress={() => fetch('https://us-central1-slanz-group.cloudfunctions.net/sendMail?name=darshan kumar')}>
        <Text style={{fontSize:25, marginHorizontal:25, marginVertical:5, color:'#ffffff'}}>Send</Text>
      </TouchableOpacity>
      <Text style={{marginHorizontal:25, fontSize:25}}>S L Group</Text>
      <Text style={styles.address}>R. K. B-14 (First Floor)</Text>
      <Text style={styles.address}>Ghaziabad ( U.P. ), India</Text>
      <Text style={styles.address}>Phone: +91 8802828308</Text>
      <Text style={styles.address}>            : +91 8920365351</Text>
      <Text style={styles.address}>Email: slanzgroup@gmail.com</Text>
    </ScrollView>
  );

}

//  https://us-central1-slanz-group.cloudfunctions.net/sendMail?name='+a+ '&email='+b+ '&subject='+c+ '&message='+d

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    paddingTop:30
  },
  textInput: {
    borderColor: '#000000',
    borderWidth:1,
    margin:10,
    fontSize:20,
    borderRadius:10,
    paddingVertical:5,
    paddingHorizontal:30
  },
  address: {
    marginHorizontal:25, 
    fontSize:20
  }
})

export default ContactScreen;