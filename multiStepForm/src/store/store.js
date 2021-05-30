import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import basicDetailReducer from '../reducers/basicDetailReducer';
import generalDetailReducer from '../reducers/generalDetailReducer';
import stepReducer from '../reducers/stepReducer';
import apiCallReducer from '../reducers/apiCallReducer';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  basicDetail: basicDetailReducer,
  generalDetail: generalDetailReducer,
  step: stepReducer,
  loading: apiCallReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return {store, persistor};
};
