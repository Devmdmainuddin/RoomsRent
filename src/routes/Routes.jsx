import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import DashboardLayout from '../layouts/DashboardLayout'
import Statistics from '../pages/dashboard/Common/Statistics'
import AddRoom from '../pages/dashboard/Host/AddRoom'
import MyListings from '../pages/dashboard/Host/MyListings'
import Profile from '../pages/dashboard/Common/Profile'
import ManageUsers from '../pages/dashboard/Admin/ManageUsers'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <RoomDetails />,
      },
    ],
  },
  {
    path: '/Dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [

      {index: true,
        element: <Statistics />
      },

      {
        path:'add-room',
        element: <AddRoom></AddRoom>
      },
      {
        path:'my-listings',
        element: <MyListings></MyListings>
      },
      {
        path:'manage-Users',
        element: <ManageUsers></ManageUsers>
      },
      {
        path:'dashboard/profile',
        element: <Profile></Profile>
      },
      // {
      //   path:'/dashboard/profile',
      //   element: <Profile/>
      // },
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
])
