import { combineReducers } from "@reduxjs/toolkit";
import loadingReducer from "@/redux/slices/loadingSlice";
import reviewsReducer from "@/redux/slices/reviewsSlice";

const rootReducer = combineReducers({
  loading: loadingReducer,
  reviews: reviewsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
