import React from 'react';
import { Check, Star, Gift, Users, Clock, MapPin } from 'lucide-react';

export default function Registration() {
  const benefits = [
    "4 horas de conteúdo exclusivo e especializado",
    "Networking em ambiente sofisticado",
    "Abordagem completa: Imagem + Etiqueta + Comunicação",
    "Material didático e apoio especializado",
    "Coffee break em galeria de arte",
    "Certificado de participação",
    "Acesso ao grupo exclusivo pós-evento",
    "Experiência imersiva na Vogue Gallery Brasil"
  ];

  return (
    <section id="inscricoes" className="py-20 bg-gradient-to-br from-tertiary-300 via-primary-500 to-tertiary-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-script text-secondary-100 mb-8">
            Garanta sua vaga!
          </h2>
          <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
            Uma experiência única de desenvolvimento pessoal em um ambiente exclusivo. Vagas limitadas!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
                <Star className="w-5 h-5" />
                <span className="font-semibold">Evento Exclusivo</span>
              </div>
              
              <div className="mb-6">
                <span className="text-neutral-300 line-through text-2xl">R$ 497,00</span>
                <div className="text-5xl md:text-6xl font-bold text-tertiary-500 mb-2">
                  R$ 297,00
                </div>
                <p className="text-neutral-500">ou 3x de R$ 99,00 sem juros</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-font mb-6 flex items-center gap-2">
                  <Gift className="w-6 h-6 text-tertiary-500" />
                  O que está incluído:
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-tertiary-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-secondary-100" />
                      </div>
                      <span className="text-font">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-secondary-300 to-primary-100 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-font mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Detalhes do Evento
                  </h3>
                  <div className="space-y-3 text-font">
                    <p><strong>Data:</strong> 21 de Agosto de 2025</p>
                    <p><strong>Horário:</strong> 16h às 20h</p>
                    <p><strong>Duração:</strong> 4 horas intensivas</p>
                    <p><strong>Formato:</strong> Presencial e intimista</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-tertiary-100 to-primary-300 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-secondary-100 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Local Exclusivo
                  </h3>
                  <p className="text-secondary-100 text-sm mb-3">
                    <strong>Vogue Gallery Brasil</strong><br />
                    Shopping Vogue Square<br />
                    Barra da Tijuca, Rio de Janeiro
                  </p>
                </div>

                <div className="bg-primary-300 rounded-lg p-4">
                  <p className="text-sm text-font">
                    <strong>🎯 Vagas Limitadas!</strong> Formato intimista para máximo aproveitamento
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-tertiary-500 to-tertiary-700 text-secondary-100 px-12 py-4 rounded-full text-xl font-bold hover:from-tertiary-700 hover:to-tertiary-900 transform hover:scale-105 transition-all duration-300 shadow-xl mb-4">
                Inscrever-se Agora
              </button>
              
              <p className="text-sm text-neutral-500">
                Pagamento 100% seguro • Parcele em até 3x sem juros
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}