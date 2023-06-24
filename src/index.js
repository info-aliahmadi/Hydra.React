import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// scroll bar
import 'simplebar/src/simplebar.css';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// apex-chart
import 'assets/third-party/apex-chart.css';

// project import

import reportWebVitals from './reportWebVitals';
import { AuthenticationProvider } from 'modules/auth/services/Authentication/AuthenticationProvider';
import { AuthorizationProvider } from 'modules/auth/services/Authorization/AuthorizationProvider';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from 'store';

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  // <StrictMode>
  <ReduxProvider store={store}>
    <Suspense fallback="...is loading">
      <AuthenticationProvider>
        <Suspense fallback="...is loading">
          <AuthorizationProvider>
            <Suspense fallback="...is loading">
              <BrowserRouter basename="/">
                <App />
              </BrowserRouter>
            </Suspense>
          </AuthorizationProvider>
        </Suspense>
      </AuthenticationProvider>
    </Suspense>
  </ReduxProvider>
  // </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
