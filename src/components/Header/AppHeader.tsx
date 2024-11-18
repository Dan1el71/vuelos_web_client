import { Link } from 'react-router-dom'

const AppHeader = () => {
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
      <div className="flex flex-row justify-between mx-auto max-w-6xl min-h-14">
        <div className="mx-10 my-auto">
          <h1 className="font-bold text-lg uppercase">Logo</h1>
        </div>

        <nav className="my-auto">
          {navItems.map(({ name, ref }, i) => (
            <Link
              className="px-5 py-4 font-normal hover:font-bold hover:border-b-2 hover:border-b-red-900"
              key={i}
              to={`/${ref}`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default AppHeader
