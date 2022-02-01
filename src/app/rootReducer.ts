import { combineReducers } from '@reduxjs/toolkit'
import weather from "../features/weather/slice"
import favourites from "../features/favourites/slice"

const rootReducer = combineReducers({
    weather,
    favourites
})

export default rootReducer