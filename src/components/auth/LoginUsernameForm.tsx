import { useOutletContext } from 'react-router-dom'
import { LoginFormProps } from './AuthComponent'

const LoginUsernameForm = () => {
  const {
    usernameError,
    loading,
    handleSubmitUsername: handleSubmit,
    username,
    setUsername,
  } = useOutletContext<LoginFormProps>()

  return (
    <div className="mx-auto my-14">
      <div className="max-w-[350px] my-2">
        <h1 className="font-bold text-lg spacing tracking-wide my-4">
          Inicia sesión o crea una cuenta
        </h1>
        <p className="font-normal text-[13px] my-4">
          Debes iniciar sesión para poder acceder a nuestros servicios
        </p>
      </div>
      <form className="flex flex-col my-4" onSubmit={handleSubmit}>
        <label htmlFor="emailInput" className="text-[13px] font-semibold">
          Usuario
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="user email"
          className="border border-gray-400 px-2 py-2 rounded-[4px] my-2 text-[13px] focus:border-red-500"
          placeholder="Indica tu nombre de usuario"
          autoFocus={true}
          type="text"
          id="usernameInput"
          autoComplete="username"
          required
        />
        {usernameError && (
          <p className="text-red-500 text-xs">{usernameError}</p>
        )}

        <button
          type="submit"
          className={`text-white text-sm font-medium px-3 py-2 my-2 border-blue-600 border bg-blue-600 rounded-md 
              ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
        >
          Continuar
        </button>
      </form>
    </div>
  )
}

export default LoginUsernameForm
