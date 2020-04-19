import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './reducers';

export const history = createBrowserHistory();

const middleware = [];
const enhancers = [];

middleware.push(thunk);
enhancers.push(composeWithDevTools(applyMiddleware(routerMiddleware(history), ...middleware)));

const store = createStore(createRootReducer(history), compose(...enhancers));

export default store;
