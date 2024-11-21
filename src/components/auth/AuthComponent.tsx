import useAuthService from '@hooks/useAuthService'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Link, Outlet, redirect, useNavigate } from 'react-router-dom'

export type LoginFormProps = {
  handleSubmitEmail: (e: React.FormEvent<HTMLFormElement>) => void
  loading: boolean
  emailError: string | null
  email: string
  setEmail: Dispatch<SetStateAction<string>>
}

export type RegisterFormProps = {
  handleSubmitLogin: (e: React.FormEvent<HTMLFormElement>) => void
  loading: boolean
  emailError: string | null
  password: string
  email: string
  setPassword: Dispatch<SetStateAction<string>>
}

const LoginComponent = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailError, setEmailError] = useState<string | null>(null)
  const { nextStep, fetchNextStep, loading, loginService } = useAuthService()
  const navigate = useNavigate()

  const handleSubmitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValid = validateEmail(email)

    if (isValid) {
      await fetchNextStep(email)
    }
  }

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await loginService(email, password)
      .then(() => {
        console.log('Logged in!')
      })
      .catch((error) => {
        setEmailError('La combinación de email y contraseña no es válida.')
        console.error('Error logging in:', error)
      })
  }

  const validateEmail = (value: string): boolean => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError('Por favor, ingresa un email válido.')
      return false
    } else {
      setEmailError(null)
      return true
    }
  }

  useEffect(() => {
    switch (nextStep) {
      case 'USER_LOGIN':
        navigate('/login/password')
        break
      case 'USER_REGISTER':
        redirect('/register')
        break
      case 'ERROR':
        setEmailError('Ocurrió un error. Por favor, intenta de nuevo.')
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
          <Link to="/" className="my-auto mx-4">
            <button className="flex flex-row text-sm font-medium text-white rounded-sm">
              <i className="bi bi-arrow-left-short mr-2"></i>
              <p>Volver</p>
            </button>
          </Link>
        </div>
      </header>
      <main
        id="emailForm"
        className={`flex flex-col items-center ${
          loading ? 'opacity-50 pointer-events-none' : ''
        }`}
      >
        <Outlet
          context={
            {
              handleSubmitLogin,
              handleSubmitEmail,
              loading,
              emailError,
              email,
              setEmail,
              password,
              setPassword,
            } satisfies LoginFormProps | RegisterFormProps
          }
        />
      </main>
    </>
  )
}

export default LoginComponent
