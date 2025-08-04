import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-primary-100 via-secondary-300 to-tertiary-100 relative overflow-hidden">
            <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
                <div className="text-center max-w-5xl mx-auto">
                    {/* Logo */}
                    <div className="mb-12">
                        <img 
                            src="/assets/images/logo.png" 
                            alt="Tríade da Apresentação Pessoal" 
                            className="h-24 md:h-32 mx-auto mb-6"
                        />
                    </div>

                    {/* Main Title */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-4xl font-bold text-font leading-tight mb-8">
                            <span className="block text-primary-500">O Corpo Fala,</span>
                            <span className="block text-primary-500">a Imagem Confirma,</span>
                            <span className="block text-primary-500">a Voz Sustenta</span>
                        </h1>
                        
                        <div className="text-2xl md:text-3xl font-semibold text-font mb-6">
                            21 de agosto de 2025
                        </div>
                        
                        <div className="text-xl md:text-2xl text-font mb-4">
                            Onde imagem, presença e propósito se encontram
                        </div>
                        
                        <div className="text-lg md:text-xl text-font italic font-medium">
                            "Um evento exclusivo que conecta marcas, pessoas e propósito"
                        </div>
                    </div>

                    {/* Event Details Card */}
                    <div className="bg-background backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-lg mx-auto mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-secondary-100" />
                            </div>
                        </div>

                        <div className="space-y-2 text-font">
                            <p className="text-lg font-semibold">
                                Das 16h às 20h
                            </p>
                            <div className="flex items-center justify-center gap-2 text-font">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">
                                    Vogue Gallery Brasil - Barra da Tijuca, RJ
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-primary-500 text-tertiary-100 px-10 py-4 rounded-full text-xl font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                            Garantir Minha Vaga
                        </button>
                        <button className="bg-tertiary-500 text-primary-500 px-10 py-4 rounded-full text-xl font-semibold hover:bg-tertiary-700 hover:text-primary-900 transition-all duration-300">
                            Saiba Mais
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}