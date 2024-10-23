import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot instead of ReactDOM
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { GoogleOAuthProvider } from "@react-oauth/google";

// Get the root container
const container = document.getElementById('root');

// Create a root instance
const root = createRoot(container);

// Render the application
root.render(
  <Router>
    <AuthContextProvider>
      <GoogleOAuthProvider clientId='932085001401-4vffcld490l19cqiqdulc4dvho732u7f.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
    </AuthContextProvider>
  </Router>
);
