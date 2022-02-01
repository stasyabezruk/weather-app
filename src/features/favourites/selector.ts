import { RootState } from '@app/store';
import { createSelector } from '@reduxjs/toolkit'
import { FavouritesState } from "./interface";

const getUserConfigReducer = ({ favourites }: RootState): FavouritesState => favourites
export const getFavLocations = (state: RootState): FavouritesState['favourites'] => getUserConfigReducer(state).favourites
export const getFavLocationByCityName = (city: string) => createSelector(
    getFavLocations,
    items => items.find(item => item.favCity === city)
)

export const getFavLocationCity = (city: string) => createSelector(
    getFavLocationByCityName(city),
    obj => obj && obj.favCity
)

export const getIsWeatherCityExistsinFav = (weatherCity: string) => createSelector(
    getFavLocations,
    (favourites) =>  !!favourites.find(item => item.favCity === weatherCity)

)