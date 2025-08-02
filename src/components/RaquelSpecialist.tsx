import { RAQUEL_INFO } from '../constants';

function RaquelSpecialist() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center mb-6">
                            <h2 className="text-4xl font-bold text-neutral-900">{RAQUEL_INFO.name}</h2>
                        </div>
                        <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="space-y-6">
                                <div className="border-l-4 border-primary-500 pl-6">
                                    <p className="text-lg text-primary-700 font-semibold mb-2">{RAQUEL_INFO.role}</p>
                                    <p className="text-neutral-700 font-medium mb-4">{RAQUEL_INFO.specialty}</p>
                                    <p className="text-neutral-700 leading-relaxed text-lg italic">
                                        "{RAQUEL_INFO.description}"
                                    </p>
                                </div>
                                
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold text-neutral-900">Áreas de Especialização:</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-neutral-700">Personal styling e consultoria de guarda-roupa</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-neutral-700">Análise de coloração pessoal</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-neutral-700">Imagem corporativa estratégica</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-neutral-700">Consultoria de presença visual profissional</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="order-1 lg:order-2">
                            <img
                                src="/assets/images/raquel-specialist.jpg"
                                alt={RAQUEL_INFO.name}
                                className="w-full h-auto max-w-lg mx-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RaquelSpecialist;
