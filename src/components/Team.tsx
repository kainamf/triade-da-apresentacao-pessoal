import React from 'react';

export default function Team() {
  return (
    <section id="quem-somos" className="py-20 bg-gradient-to-br from-primary-100 via-secondary-300 to-tertiary-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div 
              key={i} 
              className={`border border-secondary-100 ${
                i % 2 === 0 ? 'bg-primary-300/30' : 'bg-tertiary-300/30'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-script text-font mb-8">
            Quem somos!
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-background backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            {/* Team Photo Placeholder */}
            <div className="mb-12 relative">
              <div className="w-full h-64 md:h-80 bg-secondary-300 rounded-2xl flex items-center justify-center mb-8 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Equipe Tríade da Apresentação Pessoal"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name Bubbles */}
              <div className="absolute top-4 left-8 bg-background rounded-full px-4 py-2 shadow-lg">
                <span className="font-semibold text-font">Chris</span>
              </div>
              <div className="absolute top-16 right-12 bg-background rounded-full px-4 py-2 shadow-lg">
                <span className="font-semibold text-font">Wandréa</span>
              </div>
              <div className="absolute bottom-8 right-8 bg-background rounded-full px-4 py-2 shadow-lg">
                <span className="font-semibold text-font">Joana</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg md:text-xl text-font leading-relaxed">
                Somos três empreendedoras apaixonadas por transformar sonhos em negócios de sucesso. 
                Com anos de experiência em marketing, gestão e eventos, estamos aqui para compartilhar 
                nosso conhecimento e te ajudar a se tornar uma verdadeira profissional da sua área.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}