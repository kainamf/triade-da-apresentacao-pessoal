import { Star } from 'react-feather';

function Values() {
    return (
        <section id="valores" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center mb-6">
                            <Star className="text-primary-700 mr-4" size={32} />
                            <h2 className="text-4xl font-bold text-neutral-900">Nossos Valores</h2>
                        </div>
                        <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <img
                                src="/assets/images/valores.png"
                                alt="Valores"
                                className="w-full h-auto max-w-lg mx-auto"
                            />
                        </div>
                        
                        <div className="space-y-8">
                            <div className="border-l-4 border-primary-500 pl-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-3">Responsabilidade e Transparência</h3>
                                <p className="text-neutral-700 leading-relaxed">
                                    Agir com responsabilidade e transparência, mantendo uma postura alinhada ao ambiente corporativo.
                                </p>
                            </div>
                            
                            <div className="border-l-4 border-primary-500 pl-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-3">Autenticidade</h3>
                                <p className="text-neutral-700 leading-relaxed">
                                    Valorizar a autenticidade e a identidade única de cada profissional, ajustando forma e essência.
                                </p>
                            </div>
                            
                            <div className="border-l-4 border-primary-500 pl-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-3">Elegância</h3>
                                <p className="text-neutral-700 leading-relaxed">
                                    Cultivar a elegância, sofisticação, postura e inteligência social.
                                </p>
                            </div>
                            
                            <div className="border-l-4 border-primary-500 pl-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-3">Confiança e Respeito</h3>
                                <p className="text-neutral-700 leading-relaxed">
                                    Estabelecer relações de confiança, respeito, cortesia, escuta ativa, ética e integridade.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Imagem dos membros com valores */}
                    <div className="mt-16 text-center">
                        <img
                            src="/assets/images/membrosValores.png"
                            alt="Membros da Tríade da Apresentação Pessoal"
                            className="w-full h-auto max-w-4xl mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Values;
