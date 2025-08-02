import { Target } from 'react-feather';

function Mission() {
    return (
        <section id="missao" className="py-20 bg-primary-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center mb-6">
                            <Target className="text-primary-700 mr-4" size={32} />
                            <h2 className="text-4xl font-bold text-neutral-900">Nossa Missão</h2>
                        </div>
                        <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="/assets/images/missao.png"
                                alt="Missão"
                                className="w-full h-auto max-w-md mx-auto"
                            />
                        </div>
                        
                        <div>
                            <p className="text-2xl text-neutral-700 leading-relaxed font-light">
                                Conscientizar profissionais para o uso de sua imagem de forma assertiva, por meio da harmonia entre aparência, comportamento e comunicação, visando resultados positivos em sua apresentação pessoal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mission;
