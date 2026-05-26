import React from 'react';

const Footer: React.FC = () => (
  <footer className="text-sm bg-bgSecondary text-textSecondary text-center py-8 px-5 border-t border-borderDark">
    <div className="max-w-6xl mx-auto">
      <ul className="flex justify-center space-x-8 mb-5 list-none text-sm">
        <li><a href="#" className="hover:text-accent transition-colors">Sobre</a></li>
        <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
        <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
      </ul>
      <p className="text-xs">&copy; 2026 Abstractio. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
