import { Award, Book, BadgeCheck, HeartHandshake, Target, Lightbulb, Gem, Users } from 'lucide-react';
import InstagramEmbed from './InstagramEmbed';
import { BRUNA_INFO, RAQUEL_INFO, LEANDRA_INFO } from '../constants';

function About() {
    return (
        <>
            <section id="sobre" className="py-16 bg-secondary-300 relative">
                <div className="container mx-auto px-4 sm:px-6">
                    {/* Título centralizado no topo */}
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 mb-12 text-center w-full">Quem Somos</h2>
                    
                    {/* Grid principal: texto à esquerda, imagem à direita */}
                    <div className="grid md:grid-cols-[70%_30%] gap-12 items-start mb-12 h-full">
                        {/* Coluna da esquerda: texto + cards */}
                        <div className="flex flex-col gap-8 h-full">
                            <div>
                                <div className="space-y-2 text-accent leading-relaxed text-base md:text-lg mb-2 text-justify" style={{ wordSpacing: '-0.1em' }}>
                                    <p>
                                        Somos um projeto colaborativo que une três especialistas com um propósito em comum: valorizar e fortalecer a apresentação pessoal como ferramenta estratégica de qualificação profissional.
                                    </p>
                                    <p>
                                        Formamos a Tríade da Apresentação Pessoal, composta por uma consultora de etiqueta, uma consultora de imagem e uma consultora de RH. Juntas, reunimos expertises complementares que proporcionam uma abordagem completa e integrada sobre como nos apresentamos ao mundo – seja no comportamento, na imagem ou na postura profissional.
                                    </p>
                                    <p>
                                        Acreditamos que a forma como nos comunicamos, nos vestimos e nos comportamos impacta diretamente nossas oportunidades e trajetórias no mercado de trabalho. Por isso, nosso projeto é voltado a pessoas que desejam se destacar com autenticidade, elegância e competência.
                                    </p>
                                    <p>
                                        Nosso objetivo é oferecer conteúdo de valor, treinamentos e vivências práticas que contribuam para o desenvolvimento de uma imagem pessoal coerente, confiante e profissional.
                                    </p>
                                </div>
                            </div>

                            {/* Cards das três consultoras em grid 3x1 */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Bruna - Consultora de RH */}
                                <div className="bg-secondary-700 p-6 rounded-2xl shadow-md">
                                    <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2 text-center justify-center">
                                        <Award className="text-primary" size={20} /> {BRUNA_INFO.name}
                                    </h3>
                                    <p className="text-accent text-sm text-center font-medium mb-2">{BRUNA_INFO.role}</p>
                                    <p className="text-accent text-xs text-justify mb-3">{BRUNA_INFO.specialty}</p>
                                    <p className="text-accent text-xs text-justify italic">"{BRUNA_INFO.description}"</p>
                                </div>

                                {/* Raquel - Consultora de Imagem */}
                                <div className="bg-secondary-700 p-6 rounded-2xl shadow-md">
                                    <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2 text-center justify-center">
                                        <Users className="text-primary" size={20} /> {RAQUEL_INFO.name}
                                    </h3>
                                    <p className="text-accent text-sm text-center font-medium mb-2">{RAQUEL_INFO.role}</p>
                                    <p className="text-accent text-xs text-justify mb-3">{RAQUEL_INFO.specialty}</p>
                                    <p className="text-accent text-xs text-justify italic">"{RAQUEL_INFO.description}"</p>
                                </div>

                                {/* Leandra - Consultora de Etiqueta */}
                                <div className="bg-secondary-700 p-6 rounded-2xl shadow-md">
                                    <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2 text-center justify-center">
                                        <HeartHandshake className="text-primary" size={20} /> {LEANDRA_INFO.name}
                                    </h3>
                                    <p className="text-accent text-sm text-center font-medium mb-2">{LEANDRA_INFO.role}</p>
                                    <p className="text-accent text-xs text-justify mb-3">{LEANDRA_INFO.specialty}</p>
                                    <p className="text-accent text-xs text-justify italic">"{LEANDRA_INFO.description}"</p>
                                </div>
                            </div>
                        </div>

                        {/* Coluna da direita: Imagem dos membros */}
                        <div className="flex justify-center items-start w-full overflow-x-hidden">
                            <div className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px]">
                                <img
                                    src="/assets/images/quemSomos.png"
                                    alt="Quem Somos - Tríade da Apresentação Pessoal"
                                    className="w-full h-auto object-cover rounded-2xl shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
