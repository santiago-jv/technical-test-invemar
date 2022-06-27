import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const TabIcon = ({icon}) => {
  return (
    <Icon name={icon} size={30} color="#900" />
  )
}

export default TabIcon