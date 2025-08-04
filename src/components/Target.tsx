import React from 'react';
import { Heart, Users, Briefcase } from 'lucide-react';

export default function Target() {
  const targetAudience = [
    {
      title: "Pessoas interessadas em autoconhecimento e fortalecimento pessoal",
      description: "Você que busca se reconectar com sua essência e desenvolver uma imagem com intencionalidade",
      benefit: "Descubra sua autenticidade e presença única"
    },
    {
      title: "Profissionais que querem se comunicar estrategicamente",
      description: "Homens e mulheres que desejam fortalecer sua presença e impacto em suas redes sociais e profissionais",
      benefit: "Amplify seu networking e influência pessoal"
    },
    {
      title: "Pessoas que buscam desenvolvimento de imagem completo",
      description: "Quem quer construir sua apresentação pessoal nos pilares da Comunicação, Imagem e Etiqueta",
      benefit: "Transforme sua carreira e oportunidades"
    }
  ];

  return (
    <section id="publico" className="py-20 bg-gradient-to-br from-primary-100 via-secondary-300 to-tertiary-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-6 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div 
              key={i} 
              className={`border border-primary-300 ${
                i % 3 === 0 ? 'bg-primary-300/30' : i % 3 === 1 ? 'bg-secondary-300/30' : 'bg-tertiary-300/30'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-script text-font mb-4">
            Este evento é para você que:
          </h2>
          <p className="text-xl text-font max-w-3xl mx-auto">
            Esperamos um público engajado, com grande potencial de influência em suas redes e círculos sociais
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {targetAudience.map((item, index) => (
              <div key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-primary-100 rounded-3xl p-6 h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-font mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-font leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  <div className="bg-tertiary-500 text-neutral-500 px-4 py-2 rounded-full text-sm font-semibold text-center">
                    {item.benefit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-background rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-font mb-4">
              Você se identificou com algum desses perfis?
            </h3>
            <p className="text-lg text-font mb-6">
              Então este evento foi pensado especialmente para você! Junte-se a nós nesta 
              jornada de autoconhecimento e desenvolvimento pessoal.
            </p>
            <button className="bg-tertiary-500 text-neutral-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-tertiary-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Quero Participar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}