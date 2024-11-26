import useAuthService from '@hooks/useAuthService'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthHeader from './AuthHeader'

export type BaseFormProps = {
  loading: boolean
  usernameError: string | null
}

export type LoginFormProps = BaseFormProps & {
  handleSubmitUsername: (e: React.FormEvent<HTMLFormElement>) => void
  username: string
  setUsername: Dispatch<SetStateAction<string>>
}

export type LoginPasswordProps = BaseFormProps & {
  handleSubmitLogin: (e: React.FormEvent<HTMLFormElement>) => void
  username: string
  password: string
  setPassword: Dispatch<SetStateAction<string>>
}

export type RegisterFormProps = BaseFormProps & {
  handleSubmitRegister: (e: React.FormEvent<HTMLFormElement>) => void
  password: string
  confirmPassword: string
  setPassword: Dispatch<SetStateAction<string>>
  setConfirmPassword: Dispatch<SetStateAction<string>>
}

const LoginComponent = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [usernameError, setUsernameError] = useState<string | null>(null)
  const { nextStep, fetchNextStep, loading, loginService, registerService } =
    useAuthService()

  const navigate = useNavigate()

  const handleSubmitUsername = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValid = validateUsername(username)

    if (isValid) {
      await fetchNextStep(username)
    }
  }

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUsernameError(null)

    await loginService(username, password)
      .then((res) => {
        if (res.status === 200) {
          navigate('/')
        }
      })
      .catch(() => {
        setUsernameError('La combinación de usuario y contraseña no es válida.')
      })
  }

  const handleSubmitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUsernameError(null)

    if (password !== confirmPassword) {
      setUsernameError('Las contraseñas no coinciden.')
      return
    }

    await registerService(username, password)
      .then((res) => {
        if (res.status === 200) {
          navigate('/login/password', { viewTransition: true })
          setPassword('')
          alert('Usuario creado con éxito. Por favor, inicia sesión.')
        }

        if (res.status === 409) {
          setUsernameError('El usuario ya existe.')
        }
      })
      .catch((err) => {
        setUsernameError('Ocurrió un error. Por favor, intenta de nuevo.')
        console.error('Error registering user:', err)
      })
  }

  const validateUsername = (value: string): boolean => {
    if (!value) {
      setUsernameError('Por favor, ingresa un usuario válido.')
      return false
    } else {
      setUsernameError(null)
      return true
    }
  }

  useEffect(() => {
    switch (nextStep) {
      case 'USER_LOGIN':
        navigate('/login/password', {
          viewTransition: true,
        })
        break
      case 'USER_REGISTER':
        navigate('/login/register', {
          viewTransition: true,
        })
        break
      case 'ERROR':
        setUsernameError('Ocurrió un error. Por favor, intenta de nuevo.')
        break
      default:
        break
    }
  }, [nextStep, navigate])

  return (
    <>
      <AuthHeader />
      <main
        id="emailForm"
        className={`flex flex-col items-center transition duration-300 ${
          loading ? 'opacity-50 pointer-events-none' : ''
        }`}
      >
        <Outlet
          context={
            {
              handleSubmitLogin,
              handleSubmitUsername,
              handleSubmitRegister,
              loading,
              usernameError,
              username,
              password,
              confirmPassword,
              setUsername,
              setPassword,
              setConfirmPassword,
            } satisfies LoginFormProps | LoginPasswordProps | RegisterFormProps
          }
        />
      </main>
    </>
  )
}

export default LoginComponent
