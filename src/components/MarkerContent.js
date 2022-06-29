import React, {useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MarkerContent = ({station}) => {

  return (
    <View styles={styles.container}>
      <Icon name="map-marker" color={'rgb(15,130,255)'} size={30}></Icon>
    </View>
  );
};
const styles = StyleSheet.create({});
export default MarkerContent;
