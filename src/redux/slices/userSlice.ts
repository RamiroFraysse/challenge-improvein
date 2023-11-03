import { createSlice } from "@reduxjs/toolkit";
import { IUser, UserEmptyState } from "@/models";
import { clearLocalStorage, persistLocalStorage } from "@/utilities/localStorage";

export const USER_KEY = 'user';
export const userSlices = createSlice({
  name:USER_KEY,
  initialState:localStorage.getItem(USER_KEY) ? JSON.parse(localStorage.getItem(USER_KEY) as string) : UserEmptyState,
  reducers:{
    createUser: (_state,action) => {
      persistLocalStorage<IUser>(USER_KEY,action.payload);
      return action.payload;
    },
    modifyUser: (state,action) => {
      const result = {...state,...action.payload};
      persistLocalStorage<IUser>(USER_KEY,result);
      return result;
    },
    resetUser: ()=>{
      clearLocalStorage(USER_KEY);
      return UserEmptyState;
    }
  }
})

export const {createUser,modifyUser, resetUser} = userSlices.actions;

export default userSlices.reducer