import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { fetchStations } from '../redux/slices/stations/actions'
import {useDispatch, useSelector} from 'react-redux'
const StationsScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const {stations} = useSelector(state=> state.stations)
  useEffect(() => {
    
    dispatch(fetchStations())
    console.log(stations)
  }, [])
  
  return (
   <View>
    <Button title='Add station' onPress={()=>navigation.navigate('AddStationScreen')}></Button>
    {stations.map(station => (
      <Text key={station.id}>{station.place}</Text>
    ))}
   </View>
  )
}

export default StationsScreen