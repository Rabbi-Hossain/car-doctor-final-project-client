import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Booking from './Components/Booking/Booking.jsx';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import MyBooking from './Components/MyBooking/MyBooking.jsx';
import PrivetRoute from './PrivetRoute/PrivetRoute.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'booking/:id',
        element: <Booking></Booking>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'mybooking',
        element:<PrivetRoute><MyBooking></MyBooking></PrivetRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthProvider>
      <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
    </AuthProvider>
  </StrictMode>,
)
