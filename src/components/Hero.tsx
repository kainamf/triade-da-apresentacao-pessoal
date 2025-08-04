import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-primary-100 via-secondary-300 to-tertiary-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div
                            key={i}
                            className={`border border-secondary-100 ${i % 2 === 0 ? 'bg-primary-300/30' : 'bg-tertiary-300/30'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Main Title */}
                    <div className="mb-8">


                        <h1 className="text-4xl md:text-6xl font-script text-tertiary-500 mb-8">
                            O Corpo Fala,
                            a Imagem Confirma,
                            a Voz Sustenta
                        </h1>
                    </div>

                    {/* Event Details Card */}
                    <div className="bg-background backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-md mx-auto mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-secondary-100" />
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-tertiary-500 mb-2">
                            21 de Agosto de 2025
                        </h3>
                        <p className="text-lg text-tertiary-500 mb-2">
                            Das 16h às 20h
                        </p>
                        <p className="text-lg text-tertiary-900">
                            Vogue Gallery Brasil. Shopping Vogue Square Barra da Tijuca | RJ
                        </p>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-tertiary-500 text-secondary-100 px-8 py-4 rounded-full text-lg font-semibold hover:bg-tertiary-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                        Garantir Minha Vaga
                    </button>
                </div>
            </div>
        </section>
    );
}