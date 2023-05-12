import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-rq0hyv1n67murgjw.us.auth0.com'
    clientId='QOyKNPm1ZJHXGPfrWDMtmzb9N6FytuDw'
    cacheLocation='localstorage'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>
);

serviceWorker.unregister();

// dev-rq0hyv1n67murgjw.us.auth0.com
// QOyKNPm1ZJHXGPfrWDMtmzb9N6FytuDw
