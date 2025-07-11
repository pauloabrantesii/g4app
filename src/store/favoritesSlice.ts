import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  image: any;
  name: string;
  phone: string;
}

interface FavoritesState {
  users: User[];
}

const initialState: FavoritesState = {
  users: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});
export const selectUsers = (state: any) => state.favorites?.users;
export const { addUser } = favoritesSlice.actions;

export default favoritesSlice.reducer; 