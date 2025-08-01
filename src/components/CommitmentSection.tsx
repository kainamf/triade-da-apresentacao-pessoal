import { Target, Eye, Star } from 'react-feather';

function CommitmentSection() {
    return (
        <section id="compromisso" className="py-16 bg-primary-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 mb-12 text-center">Missão • Visão • Valores</h2>
                
                <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
                    {/* Missão */}
                    <div className="flex-1 min-w-[280px] bg-primary-300 p-8 rounded-2xl shadow-md flex flex-col items-center">
                        <div className="flex justify-center items-center mb-4">
                            <img
                                src="/assets/images/missao.png"
                                alt="Missão"
                                className="w-24 h-24 object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-4 flex items-center gap-2 text-center justify-center">
                            <Target className="text-primary" size={28} /> Missão
                        </h3>
                        <p className="text-accent text-base text-justify leading-relaxed">
                            Conscientizar profissionais para o uso de sua imagem de forma assertiva, por meio da harmonia entre aparência, comportamento e comunicação, visando resultados positivos em sua apresentação pessoal.
                        </p>
                    </div>

                    {/* Visão */}
                    <div className="flex-1 min-w-[280px] bg-primary-300 p-8 rounded-2xl shadow-md flex flex-col items-center">
                        <div className="flex justify-center items-center mb-4">
                            <img
                                src="/assets/images/visao.png"
                                alt="Visão"
                                className="w-24 h-24 object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-4 flex items-center gap-2 text-center justify-center">
                            <Eye className="text-primary" size={28} /> Visão
                        </h3>
                        <p className="text-accent text-base text-justify leading-relaxed">
                            Ser referência na formação de profissionais que utilizam a imagem pessoal como ferramenta estratégica para potencializar sua postura, reputação e desempenho no ambiente corporativo, contribuindo para relações mais respeitosas e eficazes.
                        </p>
                    </div>

                    {/* Valores */}
                    <div className="flex-1 min-w-[280px] bg-primary-300 p-8 rounded-2xl shadow-md flex flex-col items-center">
                        <div className="flex justify-center items-center mb-4">
                            <img
                                src="/assets/images/valores.png"
                                alt="Valores"
                                className="w-24 h-24 object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-4 flex items-center gap-2 text-center justify-center">
                            <Star className="text-primary" size={28} /> Valores
                        </h3>
                        <div className="text-accent text-base text-justify leading-relaxed space-y-3">
                            <p>Agir com <strong>RESPONSABILIDADE</strong> e <strong>TRANSPARÊNCIA</strong>, mantendo uma postura alinhada ao ambiente corporativo.</p>
                            <p>Valorizar a <strong>AUTENTICIDADE</strong> e a identidade única de cada profissional.</p>
                            <p>Cultivar a <strong>ELEGÂNCIA</strong>, sofisticação e inteligência social.</p>
                            <p>Estabelecer relações de <strong>CONFIANÇA</strong>, <strong>RESPEITO</strong>, <strong>CORTESIA</strong> e <strong>ÉTICA</strong>.</p>
                        </div>
                    </div>
                </div>

                {/* Imagem dos membros com valores abaixo */}
                <div className="mt-12 flex justify-center">
                    <div className="max-w-2xl">
                        <img
                            src="/assets/images/membrosValores.png"
                            alt="Membros da Tríade da Apresentação Pessoal"
                            className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CommitmentSection;
