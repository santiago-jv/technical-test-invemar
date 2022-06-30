import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { mainColor } from '../constants'

const FloatingActionButton = ({onPress}) => {
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.button}>
                <Icon name='add' color={'white'} size={30}/>
            </View>
        </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        zIndex:1000,
        right:10,
        bottom:10,
     
    },
    button:{
        backgroundColor:mainColor,
        width:60,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100
        
    },
   
})

export default FloatingActionButton