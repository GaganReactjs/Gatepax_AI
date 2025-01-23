import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Layout from './layout/Layout';
import Accounts from './pages/Accounts';
import Integrations from './pages/Integrations';
import Subscriptions from './pages/Subscriptions';
import Knowledge from './pages/Knowledge';
import Performance from './pages/Performance';
import Home from './pages/Home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Layout />,
        children: [
          {
            path: '',
            element: <Home />
          },
          {
            path: '/accounts',
            element: <Accounts />
          },
          {
            path: '/integrations',
            element: <Integrations />
          },
          {
            path: '/subscriptions',
            element: <Subscriptions />
          },
          {
            path: '/knowledge',
            element: <Knowledge />
          },
          {
            path: '/performance',
            element: <Performance />
          }
        ]
      }
    ]
  }
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
