import { useNavigate, useOutletContext } from 'react-router-dom'
import { LoginPasswordProps } from './AuthComponent'
import { useEffect } from 'react'

const LoginPasswordForm = () => {
  const navigate = useNavigate()
  const {
    usernameError,
    loading,
    handleSubmitLogin: handleSubmit,
    username,
    password,
    setPassword,
  } = useOutletContext<LoginPasswordProps>()

  useEffect(() => {
    if (!username?.trim()) navigate('/login')
  }, [username, navigate])

  return (
    <div className="mx-auto my-14">
      <div className="max-w-[350px] my-2">
        <h1 className="font-bold text-lg spacing tracking-wide my-4">
          Introduce tu contraseña
        </h1>
        <p className="font-normal text-[13px] my-4">
          Introduce tu contraseña de ingreso para el usuario
          <span className="font-semibold"> {username}</span>
        </p>
      </div>
      <form className="flex flex-col my-4" onSubmit={handleSubmit}>
        <label htmlFor="emailInput" className="text-[13px] font-normal">
          Contraseña
        </label>
        <input
          name="user password"
          value={password}
          disabled={loading}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 px-2 py-2 rounded-[4px] my-2 text-[13px] focus:border-red-500"
          placeholder="Introduce tu contraseña"
          autoFocus={true}
          type="password"
          id="passwordInput"
          autoComplete="current-password"
          required
        />
        {usernameError && (
          <p className="text-red-500 text-xs">{usernameError}</p>
        )}

        <button
          disabled={loading}
          type="submit"
          className={`text-white text-sm font-medium px-3 py-2 my-2 border-blue-600 border bg-blue-600 rounded-md 
              ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}

export default LoginPasswordForm
