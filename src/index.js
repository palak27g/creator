import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Make sure this matches the id of the root div in your HTML
const rootElement = document.getElementById('root');

// Ensure the root element exists before trying to create the React root
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("Could not find root element to mount to!");
}
