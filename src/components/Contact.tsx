import { PHONE, EMAIL, ADDRESS, WHATSAPP_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, FACEBOOK_LINK } from '../constants';

function Contact() {
    return (
        <section id="contato" className="py-16 bg-primary-700 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 text-font mb-4">Entre em Contato</h2>
                    <p className="text-xl text-accent-900 text-font">Transforme sua apresentação pessoal com a Tríade</p>
                </div>
                {/* Ajuste no grid para telas menores */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch w-full mx-auto">
                    <div className="space-y-4 flex flex-col">
                        {/* Informações de Contato */}
                        <div className="bg-primary-100 p-6 rounded-2xl shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                            <h3 className="text-2xl font-semibold text-accent-700 text-font mb-6 text-center">Informações de Contato</h3>
                            <div className="flex flex-col gap-y-1">
                                {/* WhatsApp */}
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                                >
                                    <div className="bg-primary-900 p-3 rounded-full transition-colors">
                                        <img src="/assets/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent-700 text-font">WhatsApp</div>
                                        <div className="text-accent-900 text-font">{PHONE}</div>
                                    </div>
                                </a>
                                {/* Instagram */}
                                <a
                                    href={INSTAGRAM_LINK}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-secondary/20 transition-colors group"
                                >
                                    <div className="bg-primary-900 p-3 rounded-full transition-colors">
                                        <img src="/assets/icons/instagram.svg" alt="Instagram" width={24} height={24} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent-700 text-font">Instagram</div>
                                        <div className="text-accent-900 text-font">@triadeapresentacaopessoal</div>
                                    </div>
                                </a>
                                {/* LinkedIn */}
                                <a
                                    href={LINKEDIN_LINK}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                                >
                                    <div className="bg-primary-900 p-3 rounded-full transition-colors">
                                        <img src="/assets/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent-700 text-font">LinkedIn</div>
                                        <div className="text-accent-900 text-font">Tríade da Apresentação Pessoal</div>
                                    </div>
                                </a>
                                {/* E-mail */}
                                <a
                                    href={`mailto:${EMAIL}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group w-full"
                                    style={{ minWidth: 0 }}
                                >
                                    <div className="bg-primary-900 p-3 rounded-full flex items-center justify-center transition-colors">
                                        <img src="/assets/icons/email.svg" alt="E-mail" width={24} height={24} style={{ display: 'block' }} />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <div className="font-semibold text-accent-700 text-font">E-mail</div>
                                        <div className="text-accent-900 text-font break-all">{EMAIL}</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* Horário de Atendimento */}
                        <div className="bg-primary-100 p-6 rounded-2xl shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto" style={{ maxHeight: '700px', overflowY: 'auto' }}>
                            <h3 className="text-2xl font-semibold text-accent-700 text-font mb-6 text-center">Horário de Atendimento</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Segunda a Sexta:</span>
                                    <span>9h às 18h</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sábado:</span>
                                    <span>9h às 13h</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Domingo:</span>
                                    <span>Fechado</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Áreas de Atuação */}
                    <div className="bg-primary-100 rounded-2xl shadow-lg p-6 flex flex-col h-full min-h-[350px] w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                        <h3 className="text-2xl font-semibold text-accent-700 text-font mb-6 text-center">Áreas de Atuação</h3>
                        <div className="flex-1 space-y-4">
                            <div className="bg-primary/10 p-4 rounded-lg">
                                <h4 className="font-semibold text-accent-700 mb-2">Consultoria de Etiqueta</h4>
                                <p className="text-accent-900 text-sm">Protocolos sociais, etiqueta à mesa e comportamento corporativo</p>
                            </div>
                            <div className="bg-secondary/10 p-4 rounded-lg">
                                <h4 className="font-semibold text-accent-700 mb-2">Consultoria de Imagem</h4>
                                <p className="text-accent-900 text-sm">Personal styling, coloração pessoal e imagem corporativa</p>
                            </div>
                            <div className="bg-accent/10 p-4 rounded-lg">
                                <h4 className="font-semibold text-accent-700 mb-2">Consultoria de RH</h4>
                                <p className="text-accent-900 text-sm">Comunicação profissional e competências comportamentais</p>
                            </div>
                            <div className="bg-tertiary/10 p-4 rounded-lg">
                                <h4 className="font-semibold text-accent-700 mb-2">Treinamentos Corporativos</h4>
                                <p className="text-accent-900 text-sm">Workshops e desenvolvimento de equipes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
