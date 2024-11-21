import { createBrowserRouter, RouteObject } from 'react-router-dom'
import App from '../App'
import AuthComponent from '@components/auth/AuthComponent'
import LoginForm from '@components/auth/LoginEmailForm'
import LoginPasswordForm from '@components/auth/LoginPasswordForm'

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
        element: <LoginForm />,
      },
      {
        path: '/login/password',
        element: <LoginPasswordForm />,
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
