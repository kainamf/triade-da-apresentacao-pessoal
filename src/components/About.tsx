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
            O evento
          </h2>

          <div className="bg-background backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-xl md:text-2xl text-font leading-relaxed mb-8">
              Um evento presencial pra transformar o seu talento em um negócio sólido.
            </p>
            
            <div className="bg-secondary-300 rounded-2xl p-6 md:p-8">
              <p className="text-lg md:text-xl text-font leading-relaxed">
                A Tríade da Apresentação Pessoal vai aprimorar a sua essência criativa e te mostrar 
                como unir marketing, atendimento e gestão para crescer de verdade.
              </p>
            </div>

            <button className="mt-8 bg-tertiary-300 text-secondary-100 px-8 py-3 rounded-full text-lg font-semibold hover:bg-tertiary-500 transform hover:scale-105 transition-all duration-300 shadow-lg border-b-4 border-tertiary-700">
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}