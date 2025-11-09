import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="site-header fixed top-0 w-full bg-bgSecondary text-textPrimary z-50 shadow-lg border-b border-borderDark">
				<div className="app-wrapper flex items-center h-20">
				<Link to="/" className="flex items-center gap-3 flex-1">
					<div
						className="w-9 h-9 rounded-md flex-shrink-0"
						aria-hidden="true"
						style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }}
					/>
					<span className="text-2xl md:text-3xl font-bold tracking-tight text-textPrimary">Abstractio</span>
				</Link>

				<nav className="hidden md:flex space-x-8 justify-center flex-1">
					<Link to="/" className="text-textPrimary hover:text-accent font-medium transition-colors">Home</Link>
					<Link to="/exercicios" className="text-textPrimary hover:text-accent font-medium transition-colors">Trilhas</Link>
					<Link to="/profile" className="text-textPrimary hover:text-accent font-medium transition-colors">Perfil</Link>
				</nav>

				<div className="flex items-center gap-3 justify-end flex-1">
					<label htmlFor="search" className="sr-only">Buscar</label>
					
					<Link 
						to="/login"
						className="hero-cta hidden md:inline-flex items-center justify-center"
					>
						Login
					</Link>

					{/* Mobile menu toggle */}
					<button
						type="button"
						className="md:hidden p-2 rounded-md hover:bg-bgPrimary/40 focus:outline-none focus:ring-2 focus:ring-accent/30"
						aria-label="Abrir menu"
						aria-expanded={open}
						aria-controls="mobile-menu"
						onClick={() => setOpen(!open)}
					>
						{open ? (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Mobile menu panel */}
			<div id="mobile-menu" className={`${open ? 'block' : 'hidden'} md:hidden border-t border-borderDark bg-bgSecondary`}>
				<div className="px-4 py-3 space-y-2">
					<Link to="/" onClick={() => setOpen(false)} className="block text-textPrimary hover:text-accent font-medium">Home</Link>
					<Link to="/exercicios" onClick={() => setOpen(false)} className="block text-textPrimary hover:text-accent font-medium">Trilhas</Link>
					<Link to="/profile" onClick={() => setOpen(false)} className="block text-textPrimary hover:text-accent font-medium">Perfil</Link>
					<div className="pt-2 border-t border-borderDark mt-2">
						
						<div className="mt-3">
							<Link 
								to="/login"
								onClick={() => setOpen(false)}
								className="hero-cta w-full text-center"
							>
								Login
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
