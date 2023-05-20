import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home/Home';
import Main from './Main/Main';
import SportDetails from './Components/Details/SportDetails';
import TruckDetails from './Components/Details/TruckDetails';
import RegularDetails from './Components/Details/RegularDetails';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'sports-car-details/:id',
        element: <SportDetails></SportDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/sport-car/${params.id}`)
      },
      {
        path: 'truck-details/:id',
        element: <TruckDetails></TruckDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/trucks/${params.id}`)
      },
      {
        path: 'reg-car-details/:id',
        element: <RegularDetails></RegularDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/regular-car/${params.id}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
