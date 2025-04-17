import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './state/store'; // Ensure your store is imported

// Create a root and render the app wrapped in Provider
const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}> {/* Wrap your app with Provider for Redux */}
      <App />
    </Provider>
  </StrictMode>
);
