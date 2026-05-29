import React, { useState } from "react";
import logotipoImg from '../assets/logotipo-removebg.png';
import { Link, NavLink } from "react-router-dom";
import {
  HomeIcon,
  MapIcon,
  TrophyIcon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { ListChecks } from "@phosphor-icons/react";
import { useProgress } from "../hooks/useProgress";
import { MOLDURAS } from "../data/molduras";
import { ACESSORIOS } from "../data/acessorios";
import AvatarFrame from "./AvatarFrame";
import ShellIcon from "./ShellIcon";
import imgPolvinho from "../assets/avatares/avatar-polvinho.png";
import imgExplorador from "../assets/avatares/avatar-explorador.png";
import imgMestreDosMaras from "../assets/avatares/avatar-mestredosmares.png";
import imgKraken from "../assets/avatares/avatar-kraken.png";

const AVATAR_SRCS: (string | null)[] = [
  imgPolvinho,
  imgExplorador,
  imgMestreDosMaras,
  imgKraken,
];

type NavItem = { to: string; label: string; Icon: React.ComponentType<{ className?: string }>; exact: boolean };

const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Home", Icon: HomeIcon, exact: true },
  { to: "/trilha", label: "Trilha", Icon: MapIcon, exact: false },
  { to: "/conquistas", label: "Conquistas", Icon: TrophyIcon, exact: false },
  { to: "/exercicios", label: "Exercícios", Icon: ListChecks, exact: false },
];

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { conchas, nivelDisplay, nomeDisplay, avatarIdx, molduraAtiva, acessorioAtivo } = useProgress();
  const avatarSrc = AVATAR_SRCS[avatarIdx] ?? AVATAR_SRCS[0];
  const moldura = MOLDURAS.find(m => m.id === molduraAtiva) ?? MOLDURAS[0];
  const acessorioSrc = ACESSORIOS.find(a => a.id === acessorioAtivo)?.src ?? '';

  return (
    <>
      {/* Mobile topbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-12 bg-bgSecondary border-b border-borderDark z-50 flex items-center px-4 gap-3">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="p-1.5 rounded-md hover:bg-bgPrimary/40"
          aria-label="Abrir menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-textPrimary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/isotipo.png"
            alt="Isotipo"
            className="w-7 h-7 rounded-md object-contain"
          />
          <img src={logotipoImg} alt="Abstractio" className="h-5 object-contain" />
        </Link>
      </div>

      {/* Mobile overlay */}
      {open && (
        <button
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[220px] bg-bgSecondary border-r border-borderDark z-50 flex flex-col transition-transform duration-200 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-1.5 h-16 border-b border-borderDark flex-shrink-0">
          <button
            onClick={() => setOpen(false)}
            className="md:hidden ml-1 rounded-md hover:bg-bgPrimary/30"
            aria-label="Fechar menu"
          >
            <XMarkIcon className="w-5 h-5 text-textPrimary" />
          </button>
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1.5"
          >
            <img
              src="/isotipo.png"
              alt="Isotipo"
              className="w-10 h-10 rounded-md object-contain"
            />
            <img src={logotipoImg} alt="Abstractio" className="h-6 object-contain" />
          </Link>
        </div>

        {/* Avatar + info */}
        <div className="flex flex-col items-center px-5 py-6 border-b border-borderDark flex-shrink-0">
          <AvatarFrame moldura={moldura}>
            <Link
              to="/perfil"
              onClick={() => setOpen(false)}
              className="relative w-32 h-32 rounded-full ring-2 ring-accent/40 overflow-hidden hover:ring-accent transition-all shadow-lg bg-bgPrimary block"
              title="Perfil"
            >
              {avatarSrc ? (
                <img
                  src={avatarSrc}
                  alt="Avatar"
                  className="w-full h-full object-cover block"
                />
              ) : (
                <div className="w-full h-full bg-bgPrimary flex items-center justify-center">
                  <UserCircleIcon className="w-8 h-8 text-textSecondary" />
                </div>
              )}
              {acessorioSrc && (
                <img
                  src={acessorioSrc}
                  alt="Acessório"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
              )}
            </Link>
          </AvatarFrame>
          <p className="mt-3 text-sm font-medium text-textPrimary leading-tight text-center">
            {nomeDisplay}
          </p>
          <p className="text-xs text-textSecondary leading-tight text-center">
            {nivelDisplay}
          </p>
          <Link
            to="/perfil#loja"
            onClick={() => setOpen(false)}
            className="mt-1 text-sm text-accent font-semibold flex items-center gap-1 hover:opacity-70 transition-opacity"
            title="Ir para a loja de conchas"
          >
            <ShellIcon className="w-4 h-4" style={{ color: '#06B6D4' }} />
            {conchas}
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <ul className="space-y-1">
            {NAV_ITEMS.map(({ to, label, Icon, exact }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={exact}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive
                        ? "bg-accent/15 text-accent"
                        : "text-textPrimary hover:bg-bgPrimary/50 hover:text-accent"
                    }`
                  }
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
