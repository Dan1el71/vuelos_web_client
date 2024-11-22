import useAuthService from '@hooks/useAuthService'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export type LoginFormProps = {
  handleSubmitUsername: (e: React.FormEvent<HTMLFormElement>) => void
  loading: boolean
  usernameError: string | null
  username: string
  setUsername: Dispatch<SetStateAction<string>>
}

export type LoginPasswordProps = {
  handleSubmitLogin: (e: React.FormEvent<HTMLFormElement>) => void
  loading: boolean
  usernameError: string | null
  password: string
  username: string
  setPassword: Dispatch<SetStateAction<string>>
}

export type RegisterFormProps = {
  handleSubmitRegister: (e: React.FormEvent<HTMLFormElement>) => void
  loading: boolean
  usernameError: string | null
  password: string
  setPassword: Dispatch<SetStateAction<string>>
  confirmPassword: string
  setConfirmPassword: Dispatch<SetStateAction<string>>
}

const LoginComponent = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [usernameError, setUsernameError] = useState<string | null>(null)
  const { nextStep, fetchNextStep, loading, loginService } = useAuthService()

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
        setUsernameError('La combinación de email y contraseña no es válida.')
      })
  }

  const handleSubmitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUsernameError(null)

    if (password !== confirmPassword) {
      setUsernameError('Las contraseñas no coinciden.')
      return
    }

    console.log('Registering user...')
    console.log(password, confirmPassword)
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
      <header className="bg-blue-800 shadow-xl">
        <div className=" flex flex-row justify-between mx-auto max-w-6xl min-h-16">
          <Link to="/" className="mx-10 my-auto flex flex-row">
            <h1 className="font-bold text-lg uppercase text-primary tracking-widest">
              Logo
            </h1>
          </Link>
          <Link viewTransition to="/" className="my-auto mx-4">
            <button className="flex flex-row text-sm font-medium text-white rounded-sm">
              <i className="bi bi-arrow-left-short mr-2"></i>
              <p>Volver</p>
            </button>
          </Link>
        </div>
      </header>
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
