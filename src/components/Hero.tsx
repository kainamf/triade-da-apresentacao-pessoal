import { WHATSAPP_LINK } from '../constants';

function Hero() {
    return (
        <section id="inicio" className="pt-16 pb-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Imagem da Tríade no Topo */}
                    <div className="text-center mb-16">
                        <img
                            src="/assets/images/membros.png"
                            alt="Membros da Tríade da Apresentação Pessoal"
                            className="w-full h-auto max-w-4xl mx-auto mb-8"
                            style={{ maxHeight: '500px', objectFit: 'contain' }}
                        />
                    </div>

                    {/* Conteúdo Principal */}
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                            Tríade da Apresentação Pessoal
                        </h1>
                        
                        <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
                        
                        <p className="text-xl md:text-2xl text-neutral-700 mb-12 leading-relaxed max-w-4xl mx-auto">
                            Valorizamos e fortalecemos a apresentação pessoal como ferramenta estratégica de qualificação profissional através da harmonia entre etiqueta, imagem e comportamento.
                        </p>
                        
                        <div>
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-primary-700 hover:bg-primary-900 text-white px-10 py-5 text-lg font-semibold transition-all duration-300 border-2 border-primary-700 hover:border-primary-900"
                            >
                                Entre em Contato
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;