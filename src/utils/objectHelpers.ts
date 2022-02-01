import { IWeatherIcon } from "@features/weather/interface";
import { IGeocoding } from "./baseTypes";
import config from '@app/config'
import { format, fromUnixTime } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export const hasCoords = (obj: IGeocoding) => obj.lat && obj.lon && obj.name

export const getWeatherIconUrl = (weatherIcon: IWeatherIcon): string => `${config.weatherSite}/img/wn/${weatherIcon.icon}@2x.png`

export const formatTime = (unixTime: number, timezone: string, regexFormat: string) =>
    format(utcToZonedTime(fromUnixTime(unixTime), timezone), regexFormat)