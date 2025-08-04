import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-tertiary-900 text-secondary-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-500 mb-4">Tríade da Apresentação Pessoal</h3>
            <p className="text-secondary-300 mb-4">
              Transformando talentos em negócios de sucesso através do conhecimento, 
              networking e muito empoderamento.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-secondary-300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500" />
                <span>(21) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500" />
                <span>contato@triadeapresentacaopessoal.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>Rio de Janeiro, RJ</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-secondary-300">
              <li><a href="#evento" className="hover:text-primary-500 transition-colors">O Evento</a></li>
              <li><a href="#quem-somos" className="hover:text-primary-500 transition-colors">Quem Somos</a></li>
              <li><a href="#publico" className="hover:text-primary-500 transition-colors">Para Quem</a></li>
              <li><a href="#local" className="hover:text-primary-500 transition-colors">Local</a></li>
              <li><a href="#inscricoes" className="hover:text-primary-500 transition-colors">Inscrições</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-tertiary-700 pt-8 text-center text-secondary-300">
          <p>&copy; 2025 Tríade da Apresentação Pessoal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}