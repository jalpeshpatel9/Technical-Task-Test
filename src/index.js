import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot from react-dom/client
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Initialize the root
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
