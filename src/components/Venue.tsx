import React from 'react';
import { MapPin, Clock, Users, Sparkles, Camera, Wine } from 'lucide-react';

export default function Venue() {
    return (
        <section id="local" className="py-20 bg-gradient-to-br from-tertiary-100 via-primary-100 to-secondary-300 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-12 h-full">
                    {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className="border border-tertiary-300" />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">Garanta sua vaga!
                    <h2 className="text-5xl md:text-6xl font-script text-font mb-4">
                        Local do Evento
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="bg-background backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
                        {/* Hero Image */}
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-2xl font-bold text-font mb-4 flex items-center gap-3">
                                    <MapPin className="w-6 h-6" />
                                    Um Espaço Único
                                </h3>
                                <div className="space-y-4 text-font leading-relaxed">
                                    <p>
                                        O evento será acolhido pela <strong>Vogue Gallery Brasil</strong>, um espaço contemporâneo
                                        e vibrante dentro do Vogue Square, na Barra da Tijuca. Com seu design moderno,
                                        atmosfera sofisticada e curadoria cultural atenta à multiplicidade de expressões.
                                    </p>

                                    <p>
                                        Em plena harmonia com a proposta da Tríade, o ambiente potencializa a experiência
                                        estética e emocional dos participantes — oferecendo uma vitrine privilegiada para
                                        um público sensível à cultura, ao estilo e ao desenvolvimento pessoal.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-tertiary-100 rounded-2xl p-6">
                                    <h4 className="text-lg font-semibold text-font mb-3 flex items-center gap-2">
                                        <MapPin className="w-5 h-5" />
                                        Endereço Completo
                                    </h4>
                                    <div className="text-font space-y-2">
                                        <p className="font-semibold">Vogue Gallery Brasil</p>
                                        <p>Shopping Vogue Square</p>
                                        <p>Av. das Américas, 8585</p>
                                        <p>Barra da Tijuca, Rio de Janeiro - RJ</p>
                                        <p className="text-sm mt-3 opacity-90">
                                            Estacionamento gratuito • Fácil acesso de transporte público
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
