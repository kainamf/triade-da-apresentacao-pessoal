import { ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK, CRP } from '../constants';

function Hero() {
    return (
        <section id="inicio" className="pt-8 pb-16 bg-stone-100">
            <div className="container mx-auto px-4 overflow-x-hidden">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Coluna da Esquerda: Logo centralizada acima do texto */}
                    <div className="flex flex-col items-center text-center">
                        <img 
                            src="/assets/images/laraLogo.png" 
                            alt="Logo Lara Frasson" 
                            className="w-48 md:w-72 mx-auto"
                        />

                        <h1 className="text-2xl md:text-3xl font-bold text-neutral-500 mb-2 leading-tight text-center">
                            Psicóloga Lara Frasson CRP {CRP} | Atendimento clínico com foco em autismo, neurodesenvolvimento e empatia
                        </h1>
                        <div className="mt-4 mb-6">
                            <blockquote className="text-lg md:text-xl italic text-stone-700 font-medium">
                                Mais do que ensinar a se comportar, eu ensino a se reconhecer. E ser acolhido por inteiro.
                            </blockquote>
                        </div>
                        <div className="mt-6">
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-secondary-500 hover:bg-secondary-700 text-background px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto animate-bounce-slow"
                            >
                                Agendar Consulta
                                <ArrowRight size={20} />
                            </a>
                            <style>{`
                                @keyframes bounce-slow {
                                  0%, 100% { transform: translateY(0); }
                                  50% { transform: translateY(-10px); }
                                }
                                .animate-bounce-slow {
                                  animation: bounce-slow 2.5s infinite;
                                }
                            `}</style>
                        </div>
                    </div>

                    {/* Coluna da Direita: Imagem de Perfil */}
                    <div className="flex justify-center items-center">
                        <div className="max-w-md w-full">
                           <img
                                src="/assets/images/laraProfile.jpeg"
                                alt="Foto de Lara Frasson"
                                className="w-full h-auto object-cover rounded-t-[200px] shadow-2xl"
                           />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;