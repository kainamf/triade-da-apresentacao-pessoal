import { BRUNA_INFO, RAQUEL_INFO, LEANDRA_INFO } from '../constants';

function About() {
    return (
        <section id="sobre" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Título */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">Quem Somos</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
                </div>
                
                {/* Conteúdo centralizado */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="space-y-6 text-neutral-700 text-lg leading-relaxed mb-12">
                        <p className="text-justify">
                            Somos um projeto colaborativo que une três especialistas com um propósito em comum: valorizar e fortalecer a apresentação pessoal como ferramenta estratégica de qualificação profissional.
                        </p>
                        <p className="text-justify">
                            Formamos a Tríade da Apresentação Pessoal, composta por uma consultora de etiqueta, uma consultora de imagem e uma consultora de RH. Juntas, reunimos expertises complementares que proporcionam uma abordagem completa e integrada.
                        </p>
                        <p className="text-justify">
                            Acreditamos que a forma como nos comunicamos, nos vestimos e nos comportamos impacta diretamente nossas oportunidades e trajetórias no mercado de trabalho.
                        </p>
                        <p className="text-justify">
                            Nosso objetivo é oferecer conteúdo de valor, treinamentos e vivências práticas que contribuam para o desenvolvimento de uma imagem pessoal coerente, confiante e profissional.
                        </p>
                    </div>

                    {/* Especialistas */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-neutral-900 mb-6">Nossas Especialistas</h3>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Bruna */}
                            <div className="border-l-4 border-primary-500 pl-6 text-left">
                                <div className="flex items-center mb-3">
                                    <h4 className="text-xl font-bold text-neutral-900">{BRUNA_INFO.name}</h4>
                                </div>
                                <p className="text-primary-700 font-semibold mb-2">{BRUNA_INFO.role}</p>
                                <p className="text-neutral-700 mb-2">{BRUNA_INFO.specialty}</p>
                                <p className="text-neutral-600 italic text-justify">"{BRUNA_INFO.description}"</p>
                            </div>

                            {/* Raquel */}
                            <div className="border-l-4 border-primary-500 pl-6 text-left">
                                <div className="flex items-center mb-3">
                                    <h4 className="text-xl font-bold text-neutral-900">{RAQUEL_INFO.name}</h4>
                                </div>
                                <p className="text-primary-700 font-semibold mb-2">{RAQUEL_INFO.role}</p>
                                <p className="text-neutral-700 mb-2">{RAQUEL_INFO.specialty}</p>
                                <p className="text-neutral-600 italic text-justify">"{RAQUEL_INFO.description}"</p>
                            </div>

                            {/* Leandra */}
                            <div className="border-l-4 border-primary-500 pl-6 text-left">
                                <div className="flex items-center mb-3">
                                    <h4 className="text-xl font-bold text-neutral-900">{LEANDRA_INFO.name}</h4>
                                </div>
                                <p className="text-primary-700 font-semibold mb-2">{LEANDRA_INFO.role}</p>
                                <p className="text-neutral-700 mb-2">{LEANDRA_INFO.specialty}</p>
                                <p className="text-neutral-600 italic text-justify">"{LEANDRA_INFO.description}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
