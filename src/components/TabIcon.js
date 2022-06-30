import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { mainColor } from '../constants';

const TabIcon = ({icon}) => {
  return (
    <Icon name={icon} size={30} color={mainColor}/>
  )
}

export default TabIcon