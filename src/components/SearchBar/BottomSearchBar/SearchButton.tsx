import React from 'react'

const SearchButton: React.FC = () => {
  return (
    <div className='mt-6'>
      <button
        className="rounded-xl bg-gradient-to-t from-sky-400 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        onClick={() => alert('Búsqueda iniciada')}
      >
        Buscar
      </button>
    </div>
  )
}

export default SearchButton
