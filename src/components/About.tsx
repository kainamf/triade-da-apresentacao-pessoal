import React from 'react';

export default function About() {
  return (
    <section id="evento" className="py-20 bg-gradient-to-r from-primary-100 to-secondary-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-6 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div 
              key={i} 
              className={`border border-primary-300 ${
                i % 3 === 0 ? 'bg-primary-300/40' : i % 3 === 1 ? 'bg-secondary-300/40' : 'bg-tertiary-300/40'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-script text-font mb-12">
            Sobre o Evento
          </h2>

          <div className="bg-background backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-xl md:text-2xl text-font leading-relaxed mb-8">
              Uma experiência que vai além da estética. Um encontro que une saberes sobre 
              imagem pessoal, etiqueta e comunicação autêntica.
            </p>
            
            <div className="bg-secondary-300 rounded-2xl p-6 md:p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="text-lg font-semibold text-tertiary-700 mb-2">Reconexão</h3>
                  <p className="text-font">Conecte-se com quem você realmente é</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-tertiary-700 mb-2">Presença</h3>
                  <p className="text-font">Desenvolva sua comunicação autêntica</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-tertiary-700 mb-2">Propósito</h3>
                  <p className="text-font">Fortaleça seus caminhos pessoais e profissionais</p>
                </div>
              </div>
            </div>

            <div className="text-left space-y-4">
              <h3 className="text-xl font-semibold text-tertiary-700 mb-4">O que você vai aprender:</h3>
              <ul className="space-y-3 text-lg text-font">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-tertiary-500 rounded-full"></div>
                  Apresentação pessoal com propósito
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-tertiary-500 rounded-full"></div>
                  A força da comunicação não verbal
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-tertiary-500 rounded-full"></div>
                  Etiqueta como ferramenta de presença e respeito
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}