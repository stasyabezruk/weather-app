import { AxiosResponse } from 'axios'
import client from './client'
import config from '../app/config'
import { ApiResponse, WeatherParam } from '../features/weather/interface'

const PATH = '/data/2.5/onecall'

export const fetchWeatherApi = (param: WeatherParam): Promise<AxiosResponse<ApiResponse>> => {
    const { coords, excludeOptions } = param
    const { lat, lon } = coords

    const excludeOptionsNotEmpty = excludeOptions && excludeOptions.length > 0;
    const excludeStr = excludeOptionsNotEmpty && excludeOptions?.join(',');
    return client.get(`${PATH}?lat=${lat}&lon=${lon}${excludeOptionsNotEmpty ? `&exclude=${excludeStr}` : ''}&appid=${config.clientId}&units=metric`)
}
