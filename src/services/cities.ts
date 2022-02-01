import { IOption } from '@utils/baseTypes';
import countries from 'all-countries-and-cities-json';

type CountryKey = keyof typeof countries

export const getCountriesOptions = (): IOption[] => {
    const arr = Object.keys(countries).map(item => ({
        label: item,
        value: item
    }))
    return arr
} 


export const getCitiesOptions = (country: string): IOption[] => {
    const cities = Array.from(new Set(countries[country as CountryKey]))?.map(item => ({
        label: item,
        value: item
    }))
    return cities
}