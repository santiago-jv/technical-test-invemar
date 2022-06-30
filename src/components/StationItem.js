import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { mainColor } from '../constants';

const StationItem = ({station, separators}) => {
  return (
    <TouchableHighlight
      key={station.key}
      onPress={() => null}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>

            <Icon name='business' color={mainColor} size={40}/>

        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.title}>{station.place}</Text>
            <Text style={styles.description}>{station.latitude}, {station.longitude}</Text>
        </View>
        
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor:'white',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:20,
        paddingVertical:10
    },
    imageContainer:{
        
    },  
    infoContainer:{
        marginLeft:20
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333'
    },
    description:{
        
    }

})
export default StationItem;
