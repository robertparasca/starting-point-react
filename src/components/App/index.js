import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment, incrementAsync } from '../../redux/reducers/App';

const App = () => {
    const dispatch = useDispatch();
    const { value, loading } = useSelector((state) => state.appSlice);
    const handleClick = () => dispatch(increment());
    const handleClickAsync = () => dispatch(incrementAsync());
    return (
        <section>
            <h1>Value: {loading ? '... loading ...' : value}</h1>
            <button onClick={handleClick} disabled={loading}>
                Increment
            </button>
            <button onClick={handleClickAsync} disabled={loading}>
                Increment async
            </button>
        </section>
    );
};

export default App;
