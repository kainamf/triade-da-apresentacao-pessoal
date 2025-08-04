import React from 'react';
import { MapPin, Clock, Users } from 'lucide-react';

export default function Venue() {
  return (
    <section id="local" className="py-20 bg-gradient-to-br from-tertiary-100 via-primary-100 to-secondary-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-tertiary-300" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-script text-font mb-4">
            Local do Evento
          </h2>
          <p className="text-xl text-tertiary-700 font-semibold">
            Sofisticação, experiência e propósito no mesmo ambiente
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-background backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            {/* Hero Image */}
            <div className="mb-8">
              <div className="w-full h-64 md:h-80 bg-gradient-to-r from-tertiary-300 to-primary-500 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Vogue Gallery Brasil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-tertiary-700 mb-4 flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  Vogue Gallery Brasil
                </h3>
                <p className="text-font leading-relaxed mb-6">
                  O evento será acolhido pela <strong>Vogue Gallery Brasil</strong>, um espaço contemporâneo 
                  e vibrante dentro do Vogue Square, na Barra da Tijuca. Com seu design moderno, 
                  atmosfera sofisticada e curadoria cultural atenta à multiplicidade de expressões.
                </p>
                
                <p className="text-font leading-relaxed">
                  Em plena harmonia com a proposta da Tríade, o ambiente potencializa a experiência 
                  estética e emocional dos participantes — oferecendo uma vitrine privilegiada para 
                  um público sensível à cultura, ao estilo e ao desenvolvimento pessoal.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-primary-100 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-tertiary-700 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Informações do Evento
                  </h4>
                  <div className="space-y-3 text-font">
                    <p><strong>Data:</strong> 21 de Agosto de 2025</p>
                    <p><strong>Horário:</strong> 16h às 20h</p>
                    <p><strong>Local:</strong> Vogue Gallery Brasil</p>
                    <p><strong>Endereço:</strong> Shopping Vogue Square<br />Barra da Tijuca, Rio de Janeiro</p>
                  </div>
                </div>

                <div className="bg-tertiary-100 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-secondary-100 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Formato Intimista
                  </h4>
                  <p className="text-secondary-100 text-sm">
                    Evento com formato cuidadosamente pensado para promover reflexões, 
                    descobertas e conexões reais em um ambiente sofisticado e acolhedor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
