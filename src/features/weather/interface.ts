import { Coords, IGeocoding } from "@utils/baseTypes";

export interface WeatherState {
    status: 'idle' | 'loading' | 'failed'
    data: ApiResponse
    coords: IGeocoding
    cityName: string
    countryName: string
    errors?: any
}

export const initialState: WeatherState = {
    status: 'loading',
    coords: {} as IGeocoding,
    cityName: '',
    countryName: '',
    data: {} as ApiResponse
}

export interface ApiResponse {
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
    current: ICurrentWeather
    hourly: HourlyForecast[]
    daily: DailyForeCast[]
}

export interface IWeather {
    dt: number;
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_deg: number
    weather: IWeatherIcon[]
    rain: {
        '1h'?: number
    }
    snow: {
        '1h'?: number
    }
}

export interface IWeatherIcon {
    id: number
    main: string
    description: string
    icon: string
}

export interface ICurrentWeather extends IWeather {
    sunrise: number
    sunset: number
    wind_gust?: number
}

export interface HourlyForecast extends IWeather {
    dew_point: number
    wind_gust?: number
    pop: number
}

export interface DailyForeCast extends Omit<IWeather, 'temp' | 'feels_like'> {
    moonrise: number
    moonset: number
    moon_phase: number
    temp: DailyTemp
    feels_like: DailyFeelsLike
    pop: number
}

export interface DailyTemp {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
}

export interface DailyFeelsLike {
    day: number
    night: number
    eve: number
    morn: number
}

const weatherOptions = ["current", "minutely", "hourly", "daily", "alerts"] as const;
export type WeatherOptionsExclude = typeof weatherOptions[number] // "current" | "minutely" | "hourly" | "daily" | "alerts"

export interface WeatherParam {
    coords: Coords
    excludeOptions?: WeatherOptionsExclude[]
}