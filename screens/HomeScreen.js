import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';


const wdth  = Dimensions.get('window').width;

const HomeScreen = props => {
  return(
    <View >
      <Carousel sliderWidth={wdth}  sliderHeight={wdth/2}   itemWidth={wdth*0.8} itemHeight={wdth*0.4}
             data={[require('../assets/images/services/dig3.jpg'),require('../assets/images/services/myca.jpg'),require('../assets/images/services/wb2.jpg'),require('../assets/images/services/wb3.jpg')]} 
             autoplay={true}
             renderItem={({item, index}, parallaxProps)=>{return(<Image source={item} style={{width:wdth*0.8,height:wdth*0.4, borderRadius:10}}/>)}}
      />
      <Text style={{margin:20, fontSize:30}}>About</Text>
      <Text style={{marginHorizontal:20,fontSize:16}}>We aim to make your online business experience smooth, speedy and efficient. With our strategic marketing approach, we make your business stand out from the competition and increase sales. Our mission is to make you the market leader by designing fully customized and responsive websites that are valuable and economical at the same time</Text>
      <TouchableOpacity style={{alignSelf:'center',marginTop:20, borderRadius:10, backgroundColor:'#0000FF', elevation:5,shadowOpacity:1,shadowColor:'#000000'}} onPress={() => props.navigation.navigate('Services')}>
        <Text style={{fontSize:25, marginHorizontal:25, marginVertical:5, color:'#ffffff'}}>Services</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignSelf:'center',marginTop:20, borderRadius:10, backgroundColor:'#0000FF', elevation:5,shadowOpacity:1,shadowColor:'#000000'}} onPress={() => props.navigation.navigate('Contact')}>
        <Text style={{fontSize:25, marginHorizontal:25, marginVertical:5, color:'#ffffff'}}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;