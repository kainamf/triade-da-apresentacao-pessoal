import { Award, Book, BadgeCheck, HeartHandshake, Target, Lightbulb, Gem } from 'lucide-react';
import InstagramEmbed from './InstagramEmbed';
import CommitmentSection from './CommitmentSection';

function About() {
    return (
        <>
            <section id="sobre" className="py-16 bg-secondary-300 relative">
                <div className="container mx-auto px-4 sm:px-6">
                    {/* Título centralizado no topo */}
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 mb-12 text-center w-full">Quem é a psicóloga Lara Frasson?</h2>
                    {/* Grid principal: texto à esquerda, Instagram à direita */}
                    <div className="grid md:grid-cols-[70%_30%] gap-12 items-start mb-12 h-full">
                        {/* Coluna da esquerda: texto + cards */}
                        <div className="flex flex-col gap-8 h-full">
                            <div>
                                <div className="space-y-2 text-accent leading-relaxed text-base md:text-lg mb-2 text-justify" style={{ wordSpacing: '-0.1em' }}>
                                    <p>
                                        Sou psicóloga, autista, especialista em neurodesenvolvimento e apaixonada por escutar o que muitas vezes o mundo insiste em silenciar.
                                    </p>
                                    <p>
                                        Atendo crianças, adolescentes e mulheres autistas com base na Análise do Comportamento Aplicada (ABA) com um olhar ético, empático e centrado na vivência de quem está do outro lado. Busco proporcionar uma escuta verdadeira e planejamento individualizado, o objetivo não é corrigir ninguém, e sim construir caminhos de autonomia, segurança e pertencimento.
                                    </p>
                                    <p>
                                        Além do atendimento clínico, desenvolvo projetos, supervisões e formações que unem ciência, sensibilidade e compromisso com a inclusão de verdade.
                                    </p>
                                </div>
                            </div>
                            {/* Cards em grid 2x2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Formação e Especializações */}
                                <div className="bg-secondary-700 p-6 rounded-2xl shadow-md">
                                    <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2 text-center justify-center"><Award className="text-primary" size={20} /> Formações</h3>
                                    <ul className="list-disc ml-5 text-accent text-sm text-justify">
                                        <li>Psicóloga formada pela Universidade Positivo</li>
                                        <li>Pós-graduada em:
                                            <ul className="list-disc ml-5 text-sm">
                                                <li>Análise do Comportamento Aplicada (ABA)</li>
                                                <li>Clínica analítico-comportamental infantil</li>
                                                <li>Neuropsicologia</li>
                                                <li>Autismo</li>
                                                <li>Habilidades terapêuticas na clínica ABA</li>
                                            </ul>
                                        </li>
                                        <li>Mestranda em Ciências Sociais Aplicadas (UEPG)</li>
                                        <li>Pesquisa sobre ensino de habilidades sociais a meninas autistas por meio de realidade virtual, com foco na prevenção de relacionamentos abusivos.</li>
                                    </ul>
                                </div>
                                {/* Posições e Projetos */}
                                <div className="bg-secondary-700 p-6 rounded-2xl shadow-md">
                                    <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2 text-center justify-center"><Award className="text-primary" size={20} /> Posições e Projetos</h3>
                                    <ul className="list-disc ml-5 text-accent text-sm text-justify">
                                        <li>Supervisora da Comissão de Desenvolvimento Atípico da ABPMC</li>
                                        <li>Diretora de projetos, inovação e sustentabilidade do Instituto TEAproxima, iniciativa que promove inclusão real para pessoas autistas na sociedade</li>
                                        <li>Criadora do curso EmpaTEA – a primeira formação do Brasil em ABA com olhar autista, ética compassiva e foco no atendimento empático</li>
                                    </ul>
                                </div>
                                {/* Certificações */}
                                <div className="bg-secondary-700 p-6 rounded-2xl shadow-md">
                                    <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2 text-center justify-center"><BadgeCheck className="text-primary" size={20} /> Certificações</h3>
                                    <ul className="list-disc ml-5 text-accent text-sm text-justify">
                                        <li>Supervisora ABA certificada QASP-S (internacional)</li>
                                        <li>Coordenadora ABA certificada CABA-BR</li>
                                        <li>Educadora parental pela Positive Discipline Association</li>
                                    </ul>
                                </div>
                                {/* Obras Publicadas */}
                                <div className="bg-secondary-700 p-6 rounded-2xl shadow-md">
                                    <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2 text-center justify-center"><Book className="text-primary" size={20} /> Obras Publicadas</h3>
                                    <ul className="list-disc ml-5 text-accent text-sm text-justify">
                                        <li>Criadora do jogo terapêutico Cabeça Dura (Terapia Criativa)</li>
                                        <li>Coautora do livro Rick (Editora Lado A) – sobre habilidades sociais para crianças</li>
                                        <li>Coordenadora do livro Olívia – um livro infantil sobre autismo e empatia, protagonizado por uma coruja autista (lançamento em novembro)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Coluna da direita: Instagram */}
                        <div className="flex justify-center items-start w-full overflow-x-hidden">
                            <div className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px]">
                                <InstagramEmbed
                                    url="https://www.instagram.com/p/DIcmvfHM3-i/"
                                    className="rounded-2xl shadow-xl bg-secondary-900"
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
