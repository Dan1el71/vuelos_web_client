import React from 'react';

const SearchButton: React.FC = () => {
	return (
		<div>
			<label htmlFor="">
				  {/*(caracter vacio) no supe como bajar el botón*/}
			</label>
			<button
				className="rounded-xl bg-gradient-to-t from-sky-400 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
				onClick={() => alert('Búsqueda iniciada')}>
				Buscar
			</button>
		</div>
	);
};

export default SearchButton;
