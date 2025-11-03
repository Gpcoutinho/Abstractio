

import React, { useState } from 'react';

const Header: React.FC = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="site-header fixed top-0 w-full bg-bgSecondary text-textPrimary z-50 shadow-lg border-b border-borderDark">
			<div className="app-wrapper flex items-center justify-between h-20">
				<div className="flex items-center gap-3">
					<div
						className="w-9 h-9 rounded-md flex-shrink-0"
						aria-hidden="true"
						style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }}
					/>
					<span className="text-2xl md:text-3xl font-extrabold tracking-tight text-secondary">Abstractio</span>
				</div>

				<nav className="hidden md:flex space-x-8">
					<a href="#" className="text-textPrimary hover:text-accent font-medium transition-colors">Home</a>
					<a href="#" className="text-textPrimary hover:text-accent font-medium transition-colors">Tópicos</a>
					<a href="#" className="text-textPrimary hover:text-accent font-medium transition-colors">Progresso</a>
				</nav>

				<div className="flex items-center gap-3">
					<label htmlFor="search" className="sr-only">Buscar tópicos</label>
					<input
						id="search"
						type="search"
						placeholder="Buscar tópicos..."
						aria-label="Buscar tópicos"
						className="search px-3 py-2 border border-borderDark rounded-md bg-bgPrimary text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accent/30 w-40 md:w-56"
					/>

					<button type="button" className="hero-cta hidden md:inline-flex items-center justify-center">
						Login
					</button>

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
					<a href="#" className="block text-textPrimary hover:text-accent font-medium">Home</a>
					<a href="#" className="block text-textPrimary hover:text-accent font-medium">Tópicos</a>
					<a href="#" className="block text-textPrimary hover:text-accent font-medium">Progresso</a>
					<div className="pt-2 border-t border-borderDark mt-2">
						<input
							id="search-mobile"
							type="search"
							placeholder="Buscar tópicos..."
							aria-label="Buscar tópicos"
							className="search w-full px-3 py-2 rounded-md bg-bgPrimary text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accent/30"
						/>
						<div className="mt-3">
							<button type="button" className="hero-cta w-full text-center">Login</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
