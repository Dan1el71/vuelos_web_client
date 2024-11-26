import useAuthService from '@hooks/useAuthService'
import { Link } from 'react-router-dom'

const AppHeader = () => {
  const { isAuthenticaded: isAuth } = useAuthService()

  const navItems = [
    {
      name: 'Reservar',
      ref: '/',
    },
    {
      name: 'Tus Reservas',
      ref: '/reservas',
    },
    {
      name: 'Contacto',
      ref: '/contacto',
    },
  ]

  return (
    <header className="bg-secondary shadow-xl">
      <div className="flex flex-row justify-between mx-auto max-w-6xl min-h-16">
        <div className="mx-10 my-auto">
          <h1 className="font-bold text-lg uppercase">Logo</h1>
        </div>

        <nav className="my-auto">
          {navItems.map(({ name, ref }, i) => (
            <Link
              viewTransition
              className="px-5 py-5 font-normal hover:font-bold hover:border-b-2 hover:border-b-red-900"
              key={i}
              to={ref}
            >
              {name}
            </Link>
          ))}
          {isAuth() ? (
            <Link viewTransition to={'/logout'} className="mx-4">
              <button className="text-white text-sm font-medium border-red-600 border px-3 py-[6px] bg-red-600 rounded-sm hover:bg-red-700">
                Logout
              </button>
            </Link>
          ) : (
            <Link to="/login" className="mx-4">
              <button className="text-white text-sm font-medium border-blue-600 border px-3 py-[6px] bg-blue-600 rounded-sm hover:bg-blue-700">
                Iniciar Sesión
              </button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default AppHeader
