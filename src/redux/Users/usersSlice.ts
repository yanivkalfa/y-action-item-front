import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../configureStore';
import { User, UserState } from '../../config/types/types';

let initialUsersState: UserState = {
  list: []
};

const UsersSlice = createSlice({
  name: 'users',
  initialState: initialUsersState,
  reducers: (create) => ({
    setUsers: create.reducer<User[]>((state, action) => {
      return {
        ...state,
        list: [...action.payload]
      };
    }),
    updateUser: create.reducer<Partial<User>>((state, action) => {
      let tmpList: User[] = [...state.list];
      let foundIndex: number = tmpList.findIndex((product: User) => product.email === action.payload.email);
      if (foundIndex > -1) {
        tmpList[foundIndex] = { ...tmpList[foundIndex], ...action.payload };
        let newState = {
          ...state,
          list: tmpList
        };
        return newState;
      }
      return state;
    }),
    deleteUser: create.reducer<string>((state, action) => {
      let tmpList: User[] = [...state.list];
      let foundIndex: number = tmpList.findIndex((user: User) => user.email === action.payload);
      if (foundIndex > -1) {
        tmpList.splice(foundIndex, 1);
        let newState = {
          ...state,
          list: tmpList
        };
        return newState;
      }
      return state;
    }),
    saveUser: create.reducer<User>((state, action) => {
      let tmpList: User[] = [...state.list];
      tmpList.push(action.payload);
      let newState = {
        ...state,
        list: tmpList
      };
      return newState;
      }
    )
  }),
});

export const { setUsers, deleteUser, updateUser } = UsersSlice.actions;
export const selectUsers = (state: RootState) => state.users.list;
export default UsersSlice.reducer