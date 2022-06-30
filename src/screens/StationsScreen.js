import React, {useEffect} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {fetchStations} from '../redux/slices/stations/actions';
import {useDispatch, useSelector} from 'react-redux';
import FloatingActionButton from '../components/FloatingActionButton';
import StationItem from '../components/StationItem';
const StationsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {stations} = useSelector(state => state.stations);
  useEffect(() => {
    dispatch(fetchStations());
  }, []);

  return (
    <>
      <FloatingActionButton
        onPress={() => navigation.navigate('AddStationScreen')}
      />
      <View>
        <FlatList
          data={stations}
          renderItem={({item,index,separators})=> (
            <StationItem key={index} station={item} separators={separators}/>
          )}
        >
        </FlatList>
   
      </View>
    </>
  );
};

export default StationsScreen;
