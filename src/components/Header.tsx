import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, Squares2X2Icon, UserIcon, ArrowRightOnRectangleIcon, XMarkIcon } from '@heroicons/react/24/outline';

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

			{/* Mobile menu overlay (improved) */}
			{open && (
				<div className="md:hidden fixed inset-0 z-50 flex">
					{/* backdrop */}
					<button aria-hidden="true" onClick={() => setOpen(false)} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
					{/* sliding panel */}
					<nav className="relative ml-auto w-80 max-w-full h-full bg-bgSecondary border-l border-borderDark shadow-xl p-6">
						<div className="flex items-center justify-between mb-6">
							<Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
								<div
									className="w-8 h-8 rounded-md flex-shrink-0"
									aria-hidden="true"
									style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }}
								/>
								<span className="font-bold text-lg">Abstractio</span>
							</Link>
							<button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-bgPrimary/30">
								<XMarkIcon className="w-6 h-6 text-textPrimary" />
							</button>
						</div>
						<ul className="space-y-4">
							<li>
								<Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 text-textPrimary hover:text-accent">
									<HomeIcon className="w-5 h-5 text-accent" />
									<span>Home</span>
								</Link>
							</li>
							<li>
								<Link to="/exercicios" onClick={() => setOpen(false)} className="flex items-center gap-3 text-textPrimary hover:text-accent">
									<Squares2X2Icon className="w-5 h-5 text-accent" />
									<span>Trilhas</span>
								</Link>
							</li>
							<li>
								<Link to="/profile" onClick={() => setOpen(false)} className="flex items-center gap-3 text-textPrimary hover:text-accent">
									<UserIcon className="w-5 h-5 text-accent" />
									<span>Perfil</span>
								</Link>
							</li>
						</ul>
						<div className="mt-6 pt-4 border-t border-borderDark">
							<div className="mt-3">
								<Link 
									to="/login"
									onClick={() => setOpen(false)}
									className="hero-cta w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md"
								>
									<ArrowRightOnRectangleIcon className="w-5 h-5" />
									<span>Login</span>
								</Link>
							</div>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
