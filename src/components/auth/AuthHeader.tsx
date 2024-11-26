import { Link } from 'react-router-dom'

const AuthHeader = () => {
  return (
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
  )
}

export default AuthHeader
