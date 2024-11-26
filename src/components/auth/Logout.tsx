import useAuthService from '@hooks/useAuthService'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const { logout } = useAuthService()
  const navigate = useNavigate()
  useEffect(() => {
    logout()
    navigate('/')
  }, [logout, navigate])

  return <></>
}

export default Logout
