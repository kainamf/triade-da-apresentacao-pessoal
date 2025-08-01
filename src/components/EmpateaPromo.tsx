import { useRef, useEffect, useState } from 'react';
import {WHATSAPP_LINK} from '../constants';

function EmpateaPromo() {
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
                <div className="w-full flex justify-center mb-4 mt-0">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-700 drop-shadow-lg font-default text-center w-full max-w-3xl">O que é o EmpaTEA?</h2>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center gap-12">
                  {/* Left: Texto */}
                  <div className="flex-1 flex flex-col items-start justify-center animate-fade-in-up font-default">
                    <div ref={textBlockRef} className="w-full bg-tertiary-700/90 rounded-2xl p-8 shadow-lg flex flex-col items-start">
                        <p className="text-xl text-accent mb-4 font-semibold font-default text-justify text-center" style={{ wordSpacing: '-0.1em' }}>O EmpaTEA não é só um curso.<br />É uma jornada criada por quem vive por dentro o que muitos só estudam por fora.</p>
                        <p className="text-lg text-accent mb-4 font-default text-justify text-center" style={{ wordSpacing: '-0.1em' }}>É um espaço de capacitação ética e afetiva pra quem quer atender pessoas autistas com respeito, sensibilidade e ciência — sem apagar quem elas são.</p>
                        <p className="text-lg text-accent mb-4 font-default text-justify text-center" style={{ wordSpacing: '-0.1em' }}>Aqui, você vai aprender a ser um terapeuta de verdade.<br />Daqueles que escutam mais do que corrigem.<br />Que sabem o que é reforço, mas também sabem o que é cuidado.<br />Que constroem vínculo, ao invés de impor protocolo.</p>
                        <p className="text-lg text-accent mb-0 italic font-default text-justify text-center" style={{ wordSpacing: '-0.1em' }}>O EmpaTEA nasceu da minha vivência como mulher autista, do incômodo com práticas capacitistas e da vontade de formar profissionais que eu indicaria com os olhos fechados pra atender quem eu amo.</p>
                    </div>
                  </div>
                  {/* Right: Image com animação */}
                  <div className="flex-1 flex justify-center items-center animate-fade-in">
                    <div className="relative w-full max-w-md group">
                        <img
                          src="/assets/images/laraToys.JPG"
                          alt="Lara com brinquedos"
                          className="rounded-[2rem] shadow-2xl border-4 border-tertiary-700 object-cover w-full max-w-[350px] max-h-[350px]"
                        />
                        <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-md border-2 border-tertiary-700">
                            <img src="/assets/images/empateaLogo.png" alt="EmpaTEA Logo mini" className="w-20" />
                        </div>
                    </div>
                  </div>
                </div>
            </div>
            {/* Botão centralizado abaixo do texto e da imagem */}
            <div className="w-full flex justify-center mt-8">
              <a
                href={`${WHATSAPP_LINK}?text=Olá! Gostaria de saber mais sobre o curso EmpaTEA.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-tertiary-700 text-accent font-bold rounded-full shadow-xl border-2 border-tertiary-700 text-lg hover:scale-105 hover:bg-tertiary-900/90 transition-all duration-300 animate-bounce-slow font-default text-center"
              >
                Quero saber mais
              </a>
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
                @keyframes spin-slow {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                  animation: spin-slow 12s linear infinite;
                }
            `}</style>
        </section>
    );
}

export default EmpateaPromo;
