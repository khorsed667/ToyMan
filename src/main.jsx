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
import SingleToyDetails from './Components/AllToys/SingleToyDetails';
import UpdateToy from './Components/MyToys/UpdateToy';
import Error from './Components/Error/Error';


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
        element: <PrivateRoute><SportDetails></SportDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-man-server-khorsed667.vercel.app/sport-car/${params.id}`)
      },
      {
        path: 'truck-details/:id',
        element: <PrivateRoute><TruckDetails></TruckDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-man-server-khorsed667.vercel.app/trucks/${params.id}`)
      },
      {
        path: 'reg-car-details/:id',
        element: <PrivateRoute><RegularDetails></RegularDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-man-server-khorsed667.vercel.app/regular-car/${params.id}`)
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
      },
      {
        path: '/cars/:id',
        element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
        loader : ({params}) => fetch(`https://toy-man-server-khorsed667.vercel.app/cars/${params.id}`)
      },
      {
        path: 'update-toy/:id',
        element:<UpdateToy></UpdateToy>,
        loader: ({params}) => fetch(`https://toy-man-server-khorsed667.vercel.app/cars/${params.id}`)
      },
      {
        path: '*',
        element: <Error></Error>
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
