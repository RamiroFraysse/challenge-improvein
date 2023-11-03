import { configureStore } from "@reduxjs/toolkit";
import { ILoader, IUser } from "@/models";
import userReducer from "./slices/userSlice";
import loaderReducer from "./slices/loaderApiSlice";

export interface AppStore {
  user: IUser;
  loader: ILoader;
}

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore<AppStore>({
  reducer: {
    user: userReducer,
    loader: loaderReducer,
  },
});
