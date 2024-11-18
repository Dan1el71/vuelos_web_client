import { createBrowserRouter, RouteObject } from 'react-router-dom'
import App from '../App'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not found</div>, // Falta implementar componente de error
  },
]

export default createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
})
