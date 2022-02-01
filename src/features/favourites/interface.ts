export interface FavouritesState {
    favourites: IFavLocation[]
}

export const initialState: FavouritesState = {
    favourites: []
}

export interface IFavLocation {
    favCity: string
    favCountry: string
}