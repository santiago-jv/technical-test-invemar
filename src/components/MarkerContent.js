import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { mainColor } from '../constants';

const MarkerContent = () => {

  return (
    <View styles={styles.container}>
      <Icon name="place" color={mainColor} size={30}></Icon>
    </View>
  );
};
const styles = StyleSheet.create({});
export default MarkerContent;
