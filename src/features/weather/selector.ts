import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@app/store';
import { WeatherState } from "./interface";

const getWeatherReducer = ({ weather }: RootState): WeatherState => weather
export const getWeatherData = (state: RootState): WeatherState['data'] => getWeatherReducer(state).data
export const getErrors = (state: RootState): WeatherState['errors'] => getWeatherReducer(state).errors
export const getGeocodingObj =  (state: RootState): WeatherState['coords'] => getWeatherReducer(state).coords
export const getWeatherCityName =  (state: RootState): WeatherState['cityName'] => getWeatherReducer(state).cityName
export const getWeatherCountryName =  (state: RootState): WeatherState['countryName'] => getWeatherReducer(state).countryName

export const getIsLoading = createSelector(getWeatherReducer, (obj) => obj.status === 'loading')
export const getIsFullfilled = createSelector(getWeatherReducer, (obj) => obj.status === 'idle')

export const getCurrentWeather = createSelector(getWeatherData, (obj) => obj.current)
export const getCurrentTemp = createSelector(getCurrentWeather, (obj) => obj?.temp)

export const getForecastDaily = createSelector(getWeatherData, (obj) => obj.daily)
export const getForecastHourly = createSelector(getWeatherData, (obj) => obj.hourly)


