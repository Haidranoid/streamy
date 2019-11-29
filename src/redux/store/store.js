import {createStore,applyMiddleware} from "redux";
import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import authReducer from "../reducers/authReducer";
import {reducer as formReducer} from 'redux-form';
import streamsReducer from "../reducers/streamsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)));

export default store;
