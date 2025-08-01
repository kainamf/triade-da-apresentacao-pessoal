import { Users, Briefcase, Heart, Zap, Target, Award } from 'react-feather';

function Services() {
    return (
        <section id="services" className="py-16 bg-primary-300 relative">
            <div className="container mx-auto px-4 overflow-x-hidden">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 mb-6">Nossos Serviços</h2>
                    <p className="text-xl text-accent max-w-3xl mx-auto">
                        Conheça como podemos ajudar você a desenvolver uma apresentação pessoal estratégica e autêntica através da nossa abordagem integrada.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 md:grid-rows-2 gap-8">
                    {/* 1 - Consultoria de Etiqueta */}
                    <div className="bg-primary-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-2">
                            <Heart className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-2 text-center">Consultoria de Etiqueta</h3>
                        <p className="text-accent leading-relaxed text-base text-justify text-center" style={{ wordSpacing: '-0.1em' }}>
                            Orientação sobre protocolos sociais e corporativos, etiqueta à mesa e comportamento adequado para diferentes contextos sociais e profissionais.
                        </p>
                    </div>
                    {/* 2 - Consultoria de Imagem */}
                    <div className="bg-primary-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-2">
                            <Users className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-2 text-center">Consultoria de Imagem</h3>
                        <p className="text-accent leading-relaxed text-base text-justify text-center" style={{ wordSpacing: '-0.1em' }}>
                            Personal styling, análise de coloração pessoal, consultoria de guarda-roupa e orientação para criar uma imagem corporativa estratégica e autêntica.
                        </p>
                    </div>
                    {/* 3 - Consultoria de RH */}
                    <div className="bg-primary-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mb-2">
                            <Briefcase className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-2 text-center">Consultoria de RH</h3>
                        <p className="text-accent leading-relaxed text-base text-justify text-center" style={{ wordSpacing: '-0.1em' }}>
                            Orientação sobre comunicação profissional, postura corporativa e desenvolvimento de competências comportamentais para o mercado de trabalho.
                        </p>
                    </div>
                    {/* 4 - Treinamentos Corporativos */}
                    <div className="bg-primary-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-2">
                            <Target className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-2 text-center">Treinamentos Corporativos</h3>
                        <p className="text-accent leading-relaxed text-base text-justify text-center" style={{ wordSpacing: '-0.1em' }}>
                            Workshops e treinamentos in-company sobre apresentação pessoal, etiqueta empresarial e desenvolvimento de uma imagem corporativa coesa.
                        </p>
                    </div>
                    {/* 5 - Palestras e Vivências */}
                    <div className="bg-primary-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-2">
                            <Zap className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-2 text-center">Palestras e Vivências</h3>
                        <p className="text-accent leading-relaxed text-base text-justify text-center" style={{ wordSpacing: '-0.1em' }}>
                            Eventos educativos e experiências práticas que abordam os pilares da apresentação pessoal de forma integrada e didática.
                        </p>
                    </div>
                    {/* 6 - Conteúdo Educativo */}
                    <div className="bg-primary-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mb-2">
                            <Award className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-2 text-center">Conteúdo Educativo</h3>
                        <p className="text-accent leading-relaxed text-base text-justify text-center" style={{ wordSpacing: '-0.1em' }}>
                            Materiais educativos, guias práticos e conteúdo digital para desenvolvimento contínuo da apresentação pessoal e competências profissionais.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
