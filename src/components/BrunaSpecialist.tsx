import { BRUNA_INFO } from '../constants';

function BrunaSpecialist() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center mb-6">
                            <h2 className="text-4xl font-bold text-neutral-900">{BRUNA_INFO.name}</h2>
                        </div>
                        <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <img
                                src="/assets/images/bruna-specialist.jpg"
                                alt={BRUNA_INFO.name}
                                className="w-full h-auto max-w-lg mx-auto rounded-lg shadow-lg"
                            />
                        </div>
                        
                        <div className="space-y-6">
                            <div className="border-l-4 border-primary-500 pl-6">
                                <p className="text-lg text-primary-700 font-semibold mb-2">{BRUNA_INFO.role}</p>
                                <p className="text-neutral-700 font-medium mb-4">{BRUNA_INFO.specialty}</p>
                                {BRUNA_INFO.company && (
                                    <p className="text-neutral-600 text-sm mb-4">{BRUNA_INFO.company}</p>
                                )}
                                <p className="text-neutral-700 leading-relaxed text-lg italic">
                                    "{BRUNA_INFO.description}"
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-neutral-900">Áreas de Especialização:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-neutral-700">Recrutamento e Seleção especializado no varejo de beleza</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-neutral-700">Desenvolvimento de competências comportamentais</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-neutral-700">Comunicação profissional e postura corporativa</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-neutral-700">Orientação de carreira e personal branding</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BrunaSpecialist;
