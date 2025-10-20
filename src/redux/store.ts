/* eslint-disable @typescript-eslint/no-explicit-any */
import { legacy_createStore, combineReducers, compose } from 'redux';
import { servicesReducer } from './reducer';

const rootReducer = combineReducers({
  services: servicesReducer,
});

const ReactReduxDevTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export const store = legacy_createStore(
  rootReducer,
  compose(ReactReduxDevTools)
);
export type RootState = ReturnType<typeof rootReducer>;
