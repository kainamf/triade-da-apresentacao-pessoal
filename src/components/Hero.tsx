import { ArrowRight } from 'react-feather';
import { WHATSAPP_LINK } from '../constants';

function Hero() {
    return (
        <section id="inicio" className="pt-16 pb-20 bg-secondary-100">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Coluna da Esquerda: Logo e texto */}
                    <div className="flex flex-col">
                        <img 
                            src="/assets/images/logo.png" 
                            alt="Logo Tríade da Apresentação Pessoal" 
                            className="w-48 md:w-64 mb-8"
                        />

                        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
                            Tríade da Apresentação Pessoal
                        </h1>
                        
                        <div className="w-16 h-1 bg-primary-500 mb-6"></div>
                        
                        <p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed">
                            Valorizamos e fortalecemos a apresentação pessoal como ferramenta estratégica de qualificação profissional através da harmonia entre etiqueta, imagem e comportamento.
                        </p>
                        
                        <div>
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-primary-700 hover:bg-primary-900 text-white px-8 py-4 font-semibold transition-all duration-300 border-2 border-primary-700 hover:border-primary-900"
                            >
                                Entre em Contato
                                <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Coluna da Direita: Imagem */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-lg">
                           <img
                                src="/assets/images/membros.png"
                                alt="Membros da Tríade da Apresentação Pessoal"
                                className="w-full h-auto"
                           />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;