
import { useRef, useEffect, useState } from 'react';

function FreeMaterialsSection() {
    const textBlockRef = useRef<HTMLDivElement>(null);
    const [imgHeight, setImgHeight] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (textBlockRef.current) {
            setImgHeight(textBlockRef.current.offsetHeight);
        }
    }, []);

    return (
        <section id="materiais-gratuitos" className="py-16 bg-secondary-300 relative overflow-hidden">
            {/* Enfeite decorativo sutil */}
            <div className="absolute left-0 top-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl z-0 animate-pulse-slow" style={{filter:'blur(24px)'}} />
            <div className="container mx-auto px-4 flex flex-col items-center gap-8 relative z-10">
                {/* Título centralizado acima */}
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 mb-2 flex items-center justify-center gap-2 w-full text-center">
                    Conteúdo Educativo <span role="img" aria-label="livro">📚</span>
                </h2>
                <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-10 lg:gap-0">
                    {/* Imagem à esquerda, alinhada à linha central */}
                    <div className="flex-1 flex justify-end items-center mb-8 lg:mb-0 pr-0 lg:pr-6">
                        <img
                            src="/assets/images/quemSomosText.png"
                            alt="Conteúdo educativo da Tríade"
                            className="object-cover rounded-2xl shadow-2xl border-4 border-secondary-700 bg-white"
                            style={imgHeight ? { height: imgHeight, maxHeight: 420 } : { maxWidth: 308, maxHeight: 308 }}
                        />
                    </div>
                    {/* Texto à direita, alinhado à linha central */}
                    <div ref={textBlockRef} className="flex-1 flex flex-col justify-center items-start text-left gap-6 pl-0 lg:pl-6">
                        <p className="text-xl text-accent mb-4 font-semibold font-default text-justify text-center" style={{ wordSpacing: '-0.1em' }}>
                            Aqui você encontra materiais educativos, guias práticos e conteúdo de valor sobre apresentação pessoal, etiqueta corporativa e desenvolvimento profissional.
                        </p>
                        <p className="text-lg text-accent mb-0 font-default text-justify text-center" style={{ wordSpacing: '-0.1em' }}>
                            Nossos conteúdos são preparados pelas especialistas da Tríade com foco em autenticidade, elegância e competência profissional. Materiais práticos para seu desenvolvimento pessoal e corporativo!
                        </p>
                    </div>
                </div>
                {/* Botão centralizado abaixo */}
                <div className="w-full flex justify-center mt-6">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-secondary-700 text-neutral-700 font-bold rounded-full shadow-lg hover:bg-accent-700 hover:text-white transition-all text-lg animate-bounce-slow"
                    >
                        Acessar Conteúdos
                    </a>
                </div>
            </div>
            <style>{`
                @keyframes bounce-slow {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                  animation: bounce-slow 2.5s infinite;
                }
                @keyframes pulse-slow {
                  0%, 100% { opacity: 0.15; }
                  50% { opacity: 0.3; }
                }
                .animate-pulse-slow {
                  animation: pulse-slow 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}

export default FreeMaterialsSection;
