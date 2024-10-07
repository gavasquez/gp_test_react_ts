import { createSlice } from '@reduxjs/toolkit';
import { localStorageTypes, Person } from '../../models';
import { getLocalStorage, setLocalStorage } from '../../utilities';

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
  name: 'people',
  initialState: getLocalStorage(localStorageTypes.FAVORITES) ? JSON.parse(getLocalStorage(localStorageTypes.FAVORITES)!) : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage( localStorageTypes.FAVORITES, state );
      return action.payload;
    }
  },
});


export const { addFavorite } = favoritesSlice.actions;