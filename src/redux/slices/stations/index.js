import {createSlice} from "@reduxjs/toolkit"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const stationSlice = createSlice({
    name:'stations',
    initialState: {
        stations:[]
    },
    reducers:{
        setStations:  (state,action) => {
            state.stations = action.payload
            
        }
    }
})
export const {setStations} = stationSlice.actions
export default stationSlice.reducer;