import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import {SERVICES} from '../data/Data';
import ServiceGridTile from '../components/ServiceGridTile';

const ServiceScreen = props => {

  const renderGridItem = itemData => {
    return (
      <ServiceGridTile
        imgUrl={itemData.item.imgUrl}
        title={itemData.item.title}
        description={itemData.item.description}
      /*  onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          });
        }}*/
      />
    );
  };

  return (
    <FlatList 
    style={{backgroundColor:'#ffffff'}}
    keyExtractor={(item, index) => item.id}
    data={SERVICES}
    renderItem={renderGridItem}
    numColumns={1}  />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ServiceScreen;
