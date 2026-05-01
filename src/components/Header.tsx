import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HomeIcon, MapIcon, TrophyIcon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Link as RouterLink } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';

const NAV_ITEMS = [
  { to: '/', label: 'Home', Icon: HomeIcon, exact: true },
  { to: '/trilha', label: 'Trilha', Icon: MapIcon, exact: false },
  { to: '/conquistas', label: 'Conquistas', Icon: TrophyIcon, exact: false },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-medium transition-colors ${isActive ? 'text-accent' : 'text-textPrimary hover:text-accent'}`;

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { pontuacao, nivelDisplay, nome, nomeDisplay } = useProgress();
  const iniciais = nome.trim() ? nome.trim().slice(0, 2).toUpperCase() : null;

  return (
    <header className="site-header fixed top-0 w-full bg-bgSecondary text-textPrimary z-50 shadow-lg border-b border-borderDark">
      <div className="app-wrapper flex items-center h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-1">
          <div
            className="w-9 h-9 rounded-md flex-shrink-0"
            aria-hidden="true"
            style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }}
          />
          <span className="text-2xl md:text-3xl font-bold tracking-tight text-textPrimary">Abstractio</span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex space-x-8 justify-center flex-1">
          {NAV_ITEMS.map(({ to, label, exact }) => (
            <NavLink key={to} to={to} end={exact} className={navLinkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* User info + avatar */}
        <div className="hidden md:flex items-center gap-3 justify-end flex-1">
          <span className="text-sm text-accent font-semibold">{pontuacao} pts</span>
          <div className="text-right">
            <p className="text-xs text-textSecondary leading-tight">{nivelDisplay}</p>
            <p className="text-sm text-textPrimary font-medium leading-tight">{nomeDisplay}</p>
          </div>
          <RouterLink
            to="/perfil"
            className="w-9 h-9 rounded-full bg-bgPrimary border border-borderDark flex items-center justify-center hover:border-accent transition-colors flex-shrink-0"
            title="Perfil"
          >
            {iniciais
              ? <span className="text-xs font-bold text-accent">{iniciais}</span>
              : <UserCircleIcon className="w-6 h-6 text-textSecondary" />
            }
          </RouterLink>
        </div>

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
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <button aria-hidden="true" onClick={() => setOpen(false)} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <nav id="mobile-menu" className="relative ml-auto w-80 max-w-full h-full bg-bgSecondary border-l border-borderDark shadow-xl p-6 flex flex-col">

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
              {NAV_ITEMS.map(({ to, label, Icon, exact }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={exact}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 ${isActive ? 'text-accent' : 'text-textPrimary hover:text-accent'}`
                    }
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4 border-t border-borderDark flex items-center gap-3">
              <UserCircleIcon className="w-8 h-8 text-textSecondary flex-shrink-0" />
              <div>
                <p className="text-sm text-textPrimary font-medium">{nivelDisplay}</p>
                <p className="text-xs text-accent">{pontuacao} pts</p>
              </div>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
