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
              
              {/* Name and Role Bubbles */}
              <div className="absolute top-4 left-8 bg-background rounded-full px-4 py-2 shadow-lg">
                <span className="font-semibold text-font text-sm">Consultora de Etiqueta</span>
              </div>
              <div className="absolute top-16 right-12 bg-background rounded-full px-4 py-2 shadow-lg">
                <span className="font-semibold text-font text-sm">Consultora de Imagem</span>
              </div>
              <div className="absolute bottom-8 right-8 bg-background rounded-full px-4 py-2 shadow-lg">
                <span className="font-semibold text-font text-sm">Consultora de RH</span>
              </div>
            </div>

            <div className="text-center space-y-6">
              <p className="text-lg md:text-xl text-font leading-relaxed">
                Somos um projeto colaborativo que une três especialistas com um propósito em comum: 
                <strong> valorizar e fortalecer a apresentação pessoal como ferramenta estratégica de qualificação profissional.</strong>
              </p>
              
              <p className="text-lg text-font leading-relaxed">
                Formamos a Tríade da Apresentação Pessoal, reunindo expertises complementares que proporcionam 
                uma abordagem completa e integrada sobre como nos apresentamos ao mundo – seja no comportamento, 
                na imagem ou na postura profissional.
              </p>
              
              <div className="bg-primary-100 rounded-2xl p-6">
                <p className="text-font leading-relaxed">
                  <strong>Acreditamos</strong> que a forma como nos comunicamos, nos vestimos e nos comportamos 
                  impacta diretamente nossas oportunidades e trajetórias no mercado de trabalho. Por isso, 
                  nosso projeto é voltado a pessoas que desejam se destacar com autenticidade, elegância e competência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}