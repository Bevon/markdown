import {configureStore as markDownStore} from '@reduxjs/toolkit';

import markDownReducer from './markdownSlice';

const store = markDownStore({
    reducer: markDownReducer
});

export default store;