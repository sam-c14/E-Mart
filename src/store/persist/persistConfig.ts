// persistConfig.ts
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  // Specify the slices you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
