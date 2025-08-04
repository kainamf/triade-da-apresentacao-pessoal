import React from 'react';
import { Heart, Users, Briefcase } from 'lucide-react';

export default function Target() {
  const targetAudience = [
    {
      icon: <Heart className="w-8 h-8 text-secondary-100" />,
      title: "Pessoas interessadas em autoconhecimento e fortalecimento pessoal",
      description: "Você que busca se reconectar com sua essência e desenvolver uma imagem com intencionalidade",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary-100" />,
      title: "Profissionais que querem se comunicar estrategicamente",
      description: "Homens e mulheres que desejam fortalecer sua presença e impacto em suas redes sociais e profissionais",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-secondary-100" />,
      title: "Pessoas que buscam desenvolvimento de imagem completo",
      description: "Quem quer construir sua apresentação pessoal nos pilares da Comunicação, Imagem e Etiqueta",
      image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400"
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

        <div className="max-w-6xl mx-auto space-y-8">
          {targetAudience.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 bg-background backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={item.image} 
                    alt={`Público-alvo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex items-start gap-6 flex-1">
                <div className="w-16 h-16 bg-tertiary-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  {item.icon}
                </div>
                
                <div className="bg-primary-100 rounded-3xl px-6 py-4 flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-tertiary-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-font leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}