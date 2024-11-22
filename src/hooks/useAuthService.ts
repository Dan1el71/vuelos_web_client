import { useState } from 'react'
import { login, register, submitEmailService } from '../services/auth'

enum NextStepEnum {
  ERROR = 'ERROR',
  USER_LOGIN = 'USER_LOGIN',
  USER_REGISTER = 'USER_REGISTER',
}

const useAuthService = () => {
  const [nextStep, setNextStep] = useState<NextStepEnum>()
  const [loading, setLoading] = useState(false)

  const fetchNextStep = async (e: string) => {
    setLoading(true)

    try {
      const { data } = await submitEmailService(e)

      switch (data.NEXT_STEP) {
        case 'USER_LOGIN':
          setNextStep(NextStepEnum.USER_LOGIN)
          break
        case 'USER_REGISTER':
          setNextStep(NextStepEnum.USER_REGISTER)
          break
        default:
          setNextStep(NextStepEnum.ERROR)
      }
    } catch (error) {
      setNextStep(NextStepEnum.ERROR)
      console.error('Error fetching next step:', error)
    } finally {
      setLoading(false)
    }
  }

  const loginService = async (email: string, password: string) => {
    setLoading(true)
    try {
      const response = await login(email, password)

      if (response && response.status === 401) {
        throw new Error('Unauthorized')
      }

      localStorage.setItem('authToken', response.data.token)
      return response
    } finally {
      setLoading(false)
    }
  }

  const registerService = async (username: string, password: string) => {
    setLoading(true)
    try {
      const response = await register(username, password)

      return response
    } finally {
      setLoading(false)
    }
  }

  return { nextStep, fetchNextStep, loading, loginService, registerService }
}

export default useAuthService
