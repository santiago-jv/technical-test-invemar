import {createSlice} from "@reduxjs/toolkit"

export const stationSlice = createSlice({
    name:'stations',
    initialState: {
        stations:[]
    },
    reducers:{
        setStations: (state,action) => {
            state.stations = action.payload
        }
    }
})
export const {setStations} = stationSlice.actions
export default stationSlice.reducer;