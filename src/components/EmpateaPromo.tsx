import { useRef, useEffect, useState } from 'react';
import { WHATSAPP_LINK, BRUNA_INFO, RAQUEL_INFO, LEANDRA_INFO } from '../constants';

function TriadeSpecialists() {
    const textBlockRef = useRef<HTMLDivElement>(null);
    const [imgHeight, setImgHeight] = useState<number | undefined>(undefined);

    useEffect(() => {
      if (textBlockRef.current) {
        setImgHeight(textBlockRef.current.offsetHeight);
      }
    }, []);

    return (
        <section className="py-16 relative overflow-hidden bg-tertiary-300">
            {/* Elementos decorativos animados */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-tertiary-900 opacity-10 rounded-full blur-3xl animate-pulse-slow z-0" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary-900 opacity-20 rounded-full blur-2xl animate-pulse-slow z-0" />
            
            <div className="container mx-auto px-4 flex flex-col items-center gap-4 relative z-10">
                {/* Título centralizado acima */}
                <div className="w-full flex justify-center mb-8 mt-0">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-700 drop-shadow-lg font-default text-center w-full max-w-3xl">
                        Conheça Nossas Especialistas
                    </h2>
                </div>

                {/* Grid das três especialistas */}
                <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
                    {/* Bruna - Consultora de RH */}
                    <div className="bg-tertiary-700/90 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center animate-fade-in-up">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center mb-4 shadow-lg">
                            <span className="text-white text-2xl font-bold">BP</span>
                        </div>
                        <h3 className="text-xl font-bold text-accent mb-2">{BRUNA_INFO.name}</h3>
                        <p className="text-md text-accent mb-3 font-semibold">{BRUNA_INFO.role}</p>
                        <p className="text-sm text-accent mb-4 italic">"{BRUNA_INFO.description}"</p>
                        <div className="bg-tertiary-900/50 rounded-lg p-3 text-xs text-accent text-left w-full">
                            <p><strong>• Especialista:</strong> {BRUNA_INFO.specialty}</p>
                            <p><strong>• Empresa:</strong> {BRUNA_INFO.company}</p>
                            <p><strong>• Formação:</strong> Administração com MBA em Gestão Empresarial</p>
                            <p><strong>• Experiência:</strong> +10 anos em RH, 9 anos no varejo de luxo</p>
                        </div>
                    </div>

                    {/* Raquel - Consultora de Imagem */}
                    <div className="bg-tertiary-700/90 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center animate-fade-in-up">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary-300 to-secondary-500 flex items-center justify-center mb-4 shadow-lg">
                            <span className="text-white text-2xl font-bold">RA</span>
                        </div>
                        <h3 className="text-xl font-bold text-accent mb-2">{RAQUEL_INFO.name}</h3>
                        <p className="text-md text-accent mb-3 font-semibold">{RAQUEL_INFO.role}</p>
                        <p className="text-sm text-accent mb-4 italic">"{RAQUEL_INFO.description}"</p>
                        <div className="bg-tertiary-900/50 rounded-lg p-3 text-xs text-accent text-left w-full">
                            <p><strong>• Especialista:</strong> {RAQUEL_INFO.specialty}</p>
                            <p><strong>• Personal Shopper</strong> certificada</p>
                            <p><strong>• Formação:</strong> Marketing</p>
                            <p><strong>• Experiência:</strong> +10 anos em marketing varejista</p>
                            <p><strong>• Foco:</strong> Moda prática, acessível e descomplicada</p>
                        </div>
                    </div>

                    {/* Leandra - Consultora de Etiqueta */}
                    <div className="bg-tertiary-700/90 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center animate-fade-in-up">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-primary-700 flex items-center justify-center mb-4 shadow-lg">
                            <span className="text-white text-2xl font-bold">LM</span>
                        </div>
                        <h3 className="text-xl font-bold text-accent mb-2">{LEANDRA_INFO.name}</h3>
                        <p className="text-md text-accent mb-3 font-semibold">{LEANDRA_INFO.role}</p>
                        <p className="text-sm text-accent mb-4 italic">"{LEANDRA_INFO.description}"</p>
                        <div className="bg-tertiary-900/50 rounded-lg p-3 text-xs text-accent text-left w-full">
                            <p><strong>• Certificação:</strong> MEC-UFBr|IFC</p>
                            <p><strong>• Empresa:</strong> {LEANDRA_INFO.company}</p>
                            <p><strong>• Cerimonialista</strong> e Chef de Cozinha</p>
                            <p><strong>• Formação:</strong> Marketing Estratégico</p>
                            <p><strong>• Parceira:</strong> Socila - Etiqueta & Elegância</p>
                        </div>
                    </div>
                </div>

                {/* Botão centralizado abaixo */}
                <div className="w-full flex justify-center mt-12">
                    <a
                        href={`${WHATSAPP_LINK}?text=Olá! Gostaria de saber mais sobre os serviços da Tríade da Apresentação Pessoal.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-tertiary-700 text-accent font-bold rounded-full shadow-xl border-2 border-tertiary-700 text-lg hover:scale-105 hover:bg-tertiary-900/90 transition-all duration-300 animate-bounce-slow font-default text-center"
                    >
                        Fale Conosco
                    </a>
                </div>
            </div>

            {/* CSS para animações customizadas */}
            <style>{`
                @keyframes fade-in-up {
                  0% { opacity: 0; transform: translateY(40px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                  animation: fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
                }
                @keyframes fade-in {
                  0% { opacity: 0; }
                  100% { opacity: 1; }
                }
                .animate-fade-in {
                  animation: fade-in 1.5s ease both;
                }
                @keyframes pulse-slow {
                  0%, 100% { opacity: 0.1; }
                  50% { opacity: 0.25; }
                }
                .animate-pulse-slow {
                  animation: pulse-slow 4s ease-in-out infinite;
                }
                @keyframes bounce-slow {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                  animation: bounce-slow 2.5s infinite;
                }
            `}</style>
        </section>
    );
}

export default TriadeSpecialists;
