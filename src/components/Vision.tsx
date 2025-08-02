export default function Vision() {
    return (
        <section id="visao" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center mb-6">
                            <h2 className="text-4xl font-bold text-neutral-900">Nossa Visão</h2>
                        </div>
                        <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <p className="text-2xl text-neutral-700 leading-relaxed font-light">
                                Ser referência na formação de profissionais que utilizam a imagem pessoal como ferramenta estratégica para potencializar sua postura, reputação e desempenho no ambiente corporativo, contribuindo para relações mais respeitosas e eficazes.
                            </p>
                        </div>
                        
                        <div className="order-1 md:order-2">
                            <img
                                src="/assets/images/visao.png"
                                alt="Visão"
                                className="w-full h-auto max-w-md mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

