import React from 'react';
import { Check, Star, Gift } from 'lucide-react';

export default function Registration() {
  const benefits = [
    "2 dias de conteúdo exclusivo",
    "Networking com profissionais do mercado",
    "Oficinas práticas e hands-on",
    "Material didático completo",
    "Coffee breaks e almoços inclusos",
    "Certificado de participação",
    "Acesso ao grupo exclusivo pós-evento"
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
            Transforme seu talento em um negócio de sucesso. Vagas limitadas!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
                <Star className="w-5 h-5" />
                <span className="font-semibold">Oferta Especial</span>
              </div>
              
              <div className="mb-6">
                <span className="text-neutral-300 line-through text-2xl">R$ 897,00</span>
                <div className="text-5xl md:text-6xl font-bold text-tertiary-500 mb-2">
                  R$ 497,00
                </div>
                <p className="text-neutral-500">ou 12x de R$ 49,70</p>
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

              <div className="bg-gradient-to-br from-secondary-300 to-primary-100 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-font mb-4">Detalhes do Evento:</h3>
                <div className="space-y-3 text-font">
                  <p><strong>Data:</strong> 05 e 06 de Agosto de 2025</p>
                  <p><strong>Horário:</strong> 8h30 às 21h (Dia 1) | 9h30 às 19h (Dia 2)</p>
                  <p><strong>Local:</strong> Casa de Festas - Espaço Pimenteira/RJ</p>
                  <p><strong>Vagas:</strong> Limitadas a 50 participantes</p>
                </div>

                <div className="mt-6 p-4 bg-primary-300 rounded-lg">
                  <p className="text-sm text-font">
                    <strong>⚡ Últimas vagas!</strong> Apenas 12 lugares disponíveis
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-tertiary-500 to-tertiary-700 text-secondary-100 px-12 py-4 rounded-full text-xl font-bold hover:from-tertiary-700 hover:to-tertiary-900 transform hover:scale-105 transition-all duration-300 shadow-xl mb-4">
                Inscrever-se Agora
              </button>
              
              <p className="text-sm text-neutral-500">
                Pagamento 100% seguro • Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}