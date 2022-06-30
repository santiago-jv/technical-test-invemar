import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { useSelector, useDispatch } from 'react-redux';
import MarkerContent from '../components/MarkerContent';
import { fetchStations } from '../redux/slices/stations/actions';

const MapScreen = () => {
  const {stations} = useSelector(state => state.stations)
  const dispatch = useDispatch()
  useEffect(() => {
    
    dispatch(fetchStations())
  }, [])
  return (
    <View style={styles.container}>
      <MapView
        
        provider={PROVIDER_GOOGLE} 
        style={styles.map}
        region={{
          latitude: 11.2316073,
          longitude: -74.2174168,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
          <>
          {stations.map(station => (
            <Marker
              title={station.place}
              description={
                `${station.latitude},${station.longitude}`
              }
            
              key={station.id}
              coordinate={{
                latitude:Number(station.latitude),
                longitude:Number(station.longitude)
              }}
            >
             <MarkerContent/>
            </Marker>
          ))}
          </>
        </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
