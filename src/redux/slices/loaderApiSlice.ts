import { createSlice } from "@reduxjs/toolkit";
import { LoaderEmptyState } from "@/models";

export const LOADING_KEY = 'loader';
export const loaderApiSlices = createSlice({
  name:LOADING_KEY,
  initialState: LoaderEmptyState,
  reducers:{
    setLoadingApi: (_state,action) => {
      console.log('reducer',action.payload);
      return action.payload;
    },
    resetLoadingApi: ()=>{
      return LoaderEmptyState;
    }
  }
})

export const {setLoadingApi,resetLoadingApi} = loaderApiSlices.actions;

export default loaderApiSlices.reducer