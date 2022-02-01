import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavLocation, initialState } from './interface';

export const favoutitesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setFavLocation(state, { payload }: PayloadAction<IFavLocation>) {
      state.favourites.push(payload)
      
    },
    removeFavLocation(state, { payload }: PayloadAction<string>) {
      state.favourites = state.favourites.filter(item => item.favCity !== payload)
    }
  }
});

export const { setFavLocation, removeFavLocation } = favoutitesSlice.actions;

export default favoutitesSlice.reducer;
