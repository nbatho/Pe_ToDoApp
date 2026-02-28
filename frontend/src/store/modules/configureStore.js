import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// Configure Redux store
export const store = configureStore({
    reducer: rootReducer
});
