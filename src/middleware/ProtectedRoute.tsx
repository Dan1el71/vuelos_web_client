import useAuthService from '@hooks/useAuthService'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const { isAuthenticaded } = useAuthService()

  const isAllowed = isAuthenticaded()

  if (!isAllowed) {
    alert('Debes iniciar sesión para acceder a esta página')
  }

  return isAllowed ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtectedRoute
