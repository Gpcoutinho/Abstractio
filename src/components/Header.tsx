import React from 'react';

const Header: React.FC = () => (
	<header className="fixed top-0 w-full h-20 bg-bgSecondary text-textPrimary flex items-center justify-between px-5 z-50 shadow-lg border-b border-borderDark">
		<div className="text-xl font-extrabold text-secondary">Abstractio</div>
    
		<nav className="hidden md:flex flex-1 justify-center">
			<ul className="flex space-x-8 list-none">
				<li><a href="#" className="text-textPrimary hover:text-accent font-medium transition-colors">Home</a></li>
				<li><a href="#" className="text-textPrimary hover:text-accent font-medium transition-colors">Tópicos</a></li>
				<li><a href="#" className="text-textPrimary hover:text-accent font-medium transition-colors">Progresso</a></li>
			</ul>
		</nav>
    
		<div className="flex items-center space-x-3">
			<label htmlFor="search" className="sr-only">Buscar tópicos</label>
			<input
				id="search"
				type="search"
				placeholder="Buscar tópicos..."
				aria-label="Buscar tópicos"
				className="px-3 py-2 border border-borderDark rounded-md bg-bgPrimary text-textPrimary placeholder-textSecondary focus:outline-none focus:border-purpleAccent w-40"
			/>
			<button type="button" className="bg-accent text-bgPrimary px-5 py-2 rounded-md font-semibold hover:bg-green-600 transition-colors shadow-lg">
				Login
			</button>
		</div>
	</header>
);

export default Header;
