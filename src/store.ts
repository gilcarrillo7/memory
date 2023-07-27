import {
  configureStore,
  combineReducers,
  Action,
  Middleware,
  CombinedState,
} from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import uiReducer, { UiState } from "./features/ui/uiSlice";
import memoryReducer, {
  MemoryState,
  fetchCards,
} from "./features/memory/memorySlice";

const rootReducer = combineReducers({
  ui: uiReducer,
  memory: memoryReducer,
});

const uiMiddleware: Middleware<
  void,
  CombinedState<{ ui: UiState; memory: MemoryState }>
> =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    const result = next(action);
    if (action.type === "ui/setName")
      localStorage.setItem("name", getState().ui.name);
    else if (action.type === "memory/openCard") {
      if (getState().memory.secondCard !== null) {
        setTimeout(() => {
          dispatch({ type: "memory/closeCards" });
        }, 1000);
      }
    }
    return result;
  };

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      uiMiddleware as unknown as ReturnType<typeof getDefaultMiddleware>
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Thunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
