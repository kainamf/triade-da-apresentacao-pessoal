import { User, Baby, Users, Group, BadgeCheck, Book, HeartHandshake, Gem, Lightbulb, GraduationCap } from 'lucide-react';

function Services() {
    return (
        <section id="services" className="py-16 bg-primary-300 relative">
            <div className="container mx-auto px-4 overflow-x-hidden">
                <div className="text-center mb-16">
                    <p className="text-xl text-accent max-w-3xl mx-auto">
                        Conheça os serviços oferecidos para o desenvolvimento comportamental e emocional de crianças, adolescentes e famílias.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 md:grid-rows-2 gap-8">
                    {/* 1 - Atuação Clínica */}
                    <div className="bg-primary-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-2">
                            <User className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-2 text-center">Atuação Clínica</h3>
                        <p className="text-accent leading-relaxed text-base text-justify text-center" style={{ wordSpacing: '-0.1em' }}>
                            Atendimento clínico de crianças, adolescentes e mulheres autistas, neurodivergentes e/ou demandas emocionais, sob a perspectiva da análise do comportamento.
                        </p>
                    </div>
                    {/* 2 - Estimula Baby */}
                    <div className="bg-primary-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-2">
                            <Baby className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-2 text-center">Estimula Baby</h3>
                        <p className="text-accent leading-relaxed text-base text-justify text-center" style={{ wordSpacing: '-0.1em' }}>
                            Estimulação precoce de bebês com desenvolvimento típico e/ou com sinal de alerta para o desenvolvimento. Seu objetivo principal é fortalecer vínculos, prevenir atrasos e potencializar habilidades desde os primeiros meses de vida, por meio de brincadeiras estruturadas e interações significativas.
                        </p>
                    </div>
                    {/* 3 - Orientação Parental */}
                    <div className="bg-primary-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mb-2">
                            <HeartHandshake className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-2 text-center">Orientação Parental</h3>
                        <p className="text-accent leading-relaxed text-base text-justify text-center" style={{ wordSpacing: '-0.1em' }}>
                            Orientação parental com o objetivo de auxiliar as famílias a manejarem o comportamento disruptivo das crianças, bem como a desenvolver práticas parentais positivas.
                        </p>
                    </div>
                    {/* 4 - Grupos Terapêuticos */}
                    <div className="bg-primary-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-2">
                            <Users className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-2 text-center">Grupos Terapêuticos</h3>
                        <p className="text-accent leading-relaxed text-base text-justify text-center" style={{ wordSpacing: '-0.1em' }}>
                            Grupos terapêuticos de habilidades sociais para crianças, adolescentes, adultos e apoio a mães, promovendo desenvolvimento emocional e social.
                        </p>
                    </div>
                    {/* 5 - Supervisão Clínica */}
                    <div className="bg-primary-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-2">
                            <Lightbulb className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-2 text-center">Supervisão Clínica</h3>
                        <p className="text-accent leading-relaxed text-base text-justify text-center" style={{ wordSpacing: '-0.1em' }}>
                            Supervisão clínica para psicólogas(os) e instituições, com foco em práticas éticas e baseadas em evidências.
                        </p>
                    </div>
                    {/* 6 - Palestras e Formações */}
                    <div className="bg-primary-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mb-2">
                            <GraduationCap className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-2 text-center">Palestras e Formações</h3>
                        <p className="text-accent leading-relaxed text-base text-justify text-center" style={{ wordSpacing: '-0.1em' }}>
                            Palestras, formações e consultorias para escolas, clínicas e famílias, promovendo conhecimento, inclusão e práticas positivas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
