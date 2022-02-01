import { AxiosResponse } from 'axios'
import client from './client'
import config from '../app/config'
import { Coords, IGeocoding } from '@utils/baseTypes'

const PATH = '/geo/1.0/direct'
const PATH2 = '/geo/1.0/reverse'

export const getCoordsByCityName = (cityName: string): Promise<AxiosResponse<IGeocoding[]>> => {
    return client.get(`${PATH}?q=${cityName}&limit=1&appid=${config.clientId}`)
}

export const getCityNameByCoords = (coords: Coords): Promise<AxiosResponse<IGeocoding[]>> => {
    const { lat, lon } = coords
    return client.get(`${PATH2}?lat=${lat}&lon=${lon}&limit=1&appid=${config.clientId}`)
}