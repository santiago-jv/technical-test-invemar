import AsyncStorage from '@react-native-async-storage/async-storage';
import  {setStations} from '.';

const getStationsFromStorage = async () => {
  let stations = JSON.parse(await AsyncStorage.getItem('stations'));
    if (!stations) {
      stations = [];
      await AsyncStorage.setItem('stations', JSON.stringify(stations));
    }
  return stations
}

export const fetchStations = () => async dispatch => {
  try {
    const stations = await getStationsFromStorage()
    dispatch(setStations(stations));
  } catch (error) {
    console.error(error.message)
  }
};

export const addStation = (station) => async dispatch => {
  try {
    const stations = await getStationsFromStorage() 
    stations.push({
      ...station,
      id:stations.length + 1
    })
    await AsyncStorage.setItem('stations', JSON.stringify(stations));
    dispatch(setStations(stations))
  } catch (error) {
    console.error(error)
  }
}