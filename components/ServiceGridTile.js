import React from 'react';
import { Dimensions, TouchableOpacity,  View, Image,  Text,  StyleSheet, ScrollView} from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';


const itemWdth = Dimensions.get('window').width-60;
const ServiceGridTile = props => {
  return (
    <View style={styles.parent}>
        <View style={styles.gridItem}>
            <Carousel sliderWidth={itemWdth}  sliderHeight={itemWdth/2}   itemWidth={itemWdth}
             data={props.imgUrl} 
             autoplay={true}
             renderItem={({item, index}, parallaxProps)=>{return(<Image source={item} style={styles.image}/>)}}
            />
            <TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
            <View style={{marginHorizontal:10, borderWidth:0.3}}/>
            <Text style={styles.description}>{props.description}</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    parent: {
        margin:30
    },
    gridItem: {
        borderRadius:10,
        elevation:5,
        shadowColor:'black',
        shadowOpacity:0.5
    },
    image: {
        width:itemWdth-4,
        height:itemWdth/2,
        marginLeft:2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title: {
        fontSize:24,
        margin:10
    },
    description: {
        fontSize:18,
        margin: 10
    }
});

export default ServiceGridTile;