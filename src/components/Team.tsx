import React from 'react';

export default function Team() {
    return (
        <section id="quem-somos" className="py-20 bg-gradient-to-br from-primary-100 via-secondary-300 to-tertiary-100 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-script text-font mb-8">
                        Quem somos!
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="bg-background backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">

                        <div className="grid lg:grid-cols-2 gap-12 items-stretch min-h-0">
                            {/* Conteúdo Textual - Esquerda */}
                            <div className="space-y-8 min-h-0">
                                <div>
                                    <p className="text-lg md:text-xl text-font leading-relaxed mb-6">
                                        Somos um projeto colaborativo que une três especialistas com um propósito em comum:
                                        <strong> valorizar e fortalecer a apresentação pessoal como ferramenta estratégica de qualificação profissional.</strong>
                                    </p>

                                    <p className="text-lg text-font leading-relaxed">
                                        Formamos a Tríade da Apresentação Pessoal, reunindo expertises complementares que proporcionam
                                        uma abordagem completa e integrada sobre como nos apresentamos ao mundo – seja no comportamento,
                                        na imagem ou na postura profissional.
                                    </p>
                                </div>

                                <div className="bg-primary-100 rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-font mb-4">Nossa Missão</h3>

                                    <div className="space-y-4">
                                        <p className="text-font leading-relaxed">
                                            <strong>Acreditamos</strong> que a forma como nos comunicamos, nos vestimos e nos comportamos
                                            impacta diretamente nossas oportunidades e trajetórias no mercado de trabalho.
                                        </p>
                                        <p className="text-font leading-relaxed">
                                            Por isso, nosso projeto é voltado a pessoas que desejam se destacar com
                                            <strong> autenticidade, elegância e competência.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full rounded-2xl overflow-hidden shadow-lg flex-1">
                                <img
                                    src="/assets/images/triade.jpeg"
                                    alt="Equipe Tríade da Apresentação Pessoal"
                                    className="w-full h-600 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}