import React, { useEffect } from 'react'
import { Button, View } from 'react-native'
import { fetchStations } from '../redux/slices/stations/actions'
import {useDispatch, useSelector} from 'react-redux'
const StationsScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const {stations} = useSelector(state=> state.stations)
  useEffect(() => {
    
    dispatch(fetchStations())

  }, [])
  
  return (
   <View>
    <Button title='Add station' onPress={()=>navigation.navigate('AddStationScreen')}></Button>

   </View>
  )
}

export default StationsScreen