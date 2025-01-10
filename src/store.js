import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice'; // Your auth slice

const store = configureStore({
    reducer: {
        auth: authReducer, // Add reducers here
    },
});

export default store;
