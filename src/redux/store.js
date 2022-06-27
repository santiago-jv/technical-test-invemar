import {configureStore} from '@reduxjs/toolkit'
import  stationReducer from './slices/stations'

export const store = configureStore({
    reducer:{
        stations:stationReducer
    }
})

