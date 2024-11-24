import { createBrowserRouter, RouteObject } from 'react-router-dom'
import App from '../App'
import AuthComponent from '@components/auth/AuthComponent'
import LoginUsernameForm from '@components/auth/LoginUsernameForm'
import LoginPasswordForm from '@components/auth/LoginPasswordForm'
import RegisterForm from '@components/auth/RegisterForm'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not found</div>, // Falta implementar componente de error
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
