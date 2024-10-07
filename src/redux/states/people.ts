import { createSlice } from '@reduxjs/toolkit';
import { localStorageTypes, Person } from '../../models';
import { getLocalStorage, setLocalStorage } from '../../utilities';

const initialState: Person[] = [];

export const peopleSlice = createSlice({
  name: 'people',
  initialState: getLocalStorage(localStorageTypes.PEOPLE) ? JSON.parse(getLocalStorage(localStorageTypes.PEOPLE)!) : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage( localStorageTypes.PEOPLE, state );
      return action.payload;
    }
  },
});

export const { addPeople } = peopleSlice.actions;
