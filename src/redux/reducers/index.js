import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import postsSlice from './Posts';

const createRootReducer = (history) => {
    const appReducer = combineReducers({
        state: (state = {}) => state,
        router: connectRouter(history),
        postsSlice
    });

    const rootReducer = (state, action) => {
        if (action.type === 'DESTROY_SESSION') {
            state = undefined;
        }

        return appReducer(state, action);
    };

    return rootReducer;
};

export default createRootReducer;
