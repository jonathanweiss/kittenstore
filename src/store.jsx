import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const rootReducer = combineReducers({
  _blank: () => ({}),
});

const history = createBrowserHistory();
const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);

export default store;
