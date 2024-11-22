import { useOutletContext } from 'react-router-dom'
import { RegisterFormProps } from './AuthComponent'

const RegisterForm = () => {
  const {
    handleSubmitRegister: handleSubmit,
    password,
    setPassword,
    usernameError,
    loading,
    confirmPassword,
    setConfirmPassword,
  } = useOutletContext<RegisterFormProps>()

  return (
    <div className="mx-auto my-14">
      <div className="max-w-[350px] my-2">
        <h1 className="font-bold text-lg spacing tracking-wide my-4">
          Crea una contraseña
        </h1>
        <p className="font-normal text-[13px] my-4">
          Usa un mínimo de 10 caracteres que incluyan mayúsculas, minúsculas y
          números.
        </p>
      </div>
      <form className="flex flex-col my-4" onSubmit={handleSubmit}>
        <label htmlFor="emailInput" className="text-[13px] font-normal">
          Contraseña <span className="text-red-500">*</span>
        </label>
        <input
          name="user password"
          value={password}
          disabled={loading}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 px-2 py-2 rounded-[4px] my-2 text-[13px] focus:border-red-500"
          placeholder="Introduce una contraseña"
          autoFocus={true}
          type="password"
          id="passwordInput"
          autoComplete="new-password"
          required
        />
        <label htmlFor="emailInput" className="text-[13px] font-normal">
          Confirma la contraseña <span className="text-red-500">*</span>
        </label>
        <input
          name="user confirm password"
          value={confirmPassword}
          disabled={loading}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border border-gray-400 px-2 py-2 rounded-[4px] my-2 text-[13px] focus:border-red-500"
          placeholder="Confirma tu contraseña"
          autoFocus={true}
          type="password"
          id="confirmPasswordInput"
          autoComplete="new-password"
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
          Crear una cuenta
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
