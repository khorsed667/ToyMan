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
import AllToys from './Components/AllToys/AllToys';
import AddToy from './Components/AddToy/AddToy';
import PrivateRoute from './Provider/PrivateRoute';
import MyToys from './Components/MyToys/MyToys';
import Blogs from './Components/Blogs/Blogs';


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
      },
      {
        path:'alltoys',
        element:<AllToys></AllToys>
      },
      {
        path:'addtoys',
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path:'mytoys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
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
