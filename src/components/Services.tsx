function Services() {
    return (
        <section id="services" className="py-20 bg-secondary-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">Nossos Serviços</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
                    <p className="text-xl text-neutral-700 max-w-4xl mx-auto">
                        Oferecemos uma abordagem integrada e estratégica para o desenvolvimento da sua apresentação pessoal e competências profissionais.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* 1 - Consultoria de Etiqueta */}
                    <div className="bg-white p-8 border-l-4 border-primary-500 hover:border-primary-700 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4">
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">Consultoria de Etiqueta</h3>
                        </div>
                        <p className="text-neutral-700 leading-relaxed">
                            Orientação sobre protocolos sociais e corporativos, etiqueta à mesa e comportamento adequado para diferentes contextos profissionais.
                        </p>
                    </div>

                    {/* 2 - Consultoria de Imagem */}
                    <div className="bg-white p-8 border-l-4 border-primary-500 hover:border-primary-700 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4">
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">Consultoria de Imagem</h3>
                        </div>
                        <p className="text-neutral-700 leading-relaxed">
                            Personal styling, análise de coloração pessoal, consultoria de guarda-roupa e orientação para uma imagem corporativa estratégica.
                        </p>
                    </div>

                    {/* 3 - Consultoria de RH */}
                    <div className="bg-white p-8 border-l-4 border-primary-500 hover:border-primary-700 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4">
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">Consultoria de RH</h3>
                        </div>
                        <p className="text-neutral-700 leading-relaxed">
                            Orientação sobre comunicação profissional, postura corporativa e desenvolvimento de competências comportamentais.
                        </p>
                    </div>

                    {/* 4 - Treinamentos Corporativos */}
                    <div className="bg-white p-8 border-l-4 border-primary-500 hover:border-primary-700 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4">
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">Treinamentos Corporativos</h3>
                        </div>
                        <p className="text-neutral-700 leading-relaxed">
                            Workshops e treinamentos in-company sobre apresentação pessoal, etiqueta empresarial e desenvolvimento de imagem corporativa.
                        </p>
                    </div>

                    {/* 5 - Palestras e Vivências */}
                    <div className="bg-white p-8 border-l-4 border-primary-500 hover:border-primary-700 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4">
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">Palestras e Vivências</h3>
                        </div>
                        <p className="text-neutral-700 leading-relaxed">
                            Eventos educativos e experiências práticas que abordam os pilares da apresentação pessoal de forma integrada.
                        </p>
                    </div>

                    {/* 6 - Conteúdo Educativo */}
                    <div className="bg-white p-8 border-l-4 border-primary-500 hover:border-primary-700 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4">
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">Conteúdo Educativo</h3>
                        </div>
                        <p className="text-neutral-700 leading-relaxed">
                            Materiais educativos, guias práticos e conteúdo digital para desenvolvimento contínuo da apresentação pessoal.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
