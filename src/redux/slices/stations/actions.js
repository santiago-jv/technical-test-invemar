import AsyncStorage from '@react-native-async-storage/async-storage';
import {setStations} from '.';

export const fetchStations = () => async dispatch => {
  try {
    let stations = JSON.parse(await AsyncStorage.getItem('stations'));
    if (!stations) {
      stations = [];
      await AsyncStorage.setItem('stations', JSON.stringify(stations));
    }
    dispatch(setStations(stations));
  } catch (error) {
    console.error(error.message)
  }
};
