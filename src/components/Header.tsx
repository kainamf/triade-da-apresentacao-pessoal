import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary-500">
          Tríade da Apresentação Pessoal
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#evento" className="text-font hover:text-primary-500 transition-colors">O Evento</a>
          <a href="#quem-somos" className="text-font hover:text-primary-500 transition-colors">Quem Somos</a>
          <a href="#publico" className="text-font hover:text-primary-500 transition-colors">Para Quem</a>
          <a href="#agenda" className="text-font hover:text-primary-500 transition-colors">Agenda</a>
          <a href="#inscricoes" className="bg-primary-500 text-secondary-100 px-6 py-2 rounded-full hover:bg-primary-700 transition-colors">
            Inscrever-se
          </a>
        </nav>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#evento" className="text-font hover:text-primary-500 transition-colors">O Evento</a>
            <a href="#quem-somos" className="text-font hover:text-primary-500 transition-colors">Quem Somos</a>
            <a href="#publico" className="text-font hover:text-primary-500 transition-colors">Para Quem</a>
            <a href="#agenda" className="text-font hover:text-primary-500 transition-colors">Agenda</a>
            <a href="#inscricoes" className="bg-primary-500 text-secondary-100 px-6 py-2 rounded-full hover:bg-primary-700 transition-colors text-center">
              Inscrever-se
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}