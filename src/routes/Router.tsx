import { createBrowserRouter, RouteObject } from 'react-router-dom'
import App from '../App'
import AuthComponent from '@components/auth/AuthComponent'
import LoginUsernameForm from '@components/auth/LoginUsernameForm'
import LoginPasswordForm from '@components/auth/LoginPasswordForm'
import RegisterForm from '@components/auth/RegisterForm'
import Logout from '@components/auth/Logout'
import ProtectedRoute from '../middleware/ProtectedRoute'
import Reservas from '@components/pages/Reservas'
import AirlineList from '@components/pages/AirlineList'
import FlightList from '@components/pages/FlightList'
import FourOhFour from '@components/404'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <FourOhFour />, // Falta implementar componente de error
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/reservas',
        element: <Reservas />,
      },
      {
        path: '/airlines',
        element: <AirlineList />,
      },
      {
        path: '/flights',
        element: <FlightList />,
      },
    ],
  },
  {
    path: '/login',
    element: <AuthComponent />,
    children: [
      {
        path: '/login',
        element: <LoginUsernameForm />,
      },
      {
        path: '/login/password',
        element: <LoginPasswordForm />,
      },
      {
        path: '/login/register',
        element: <RegisterForm />,
      },
    ],
  },
  {
    path: '/logout',
    element: <Logout />,
  },
]

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
})

export default router
