import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';

import { env } from './helpers/env';
import { UserState } from './context/UserState';
import { CurrentEventState } from './context/CurrentEventState';
import { SocketState } from './context/SocketState';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Auth0Provider domain={env.domain} clientId={env.clientId} redirectUri="http://localhost:3000">
      <UserState>
        <SocketState>
          <CurrentEventState>
            <App />
          </CurrentEventState>
        </SocketState>
      </UserState>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
