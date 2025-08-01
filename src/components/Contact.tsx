import { PHONE, EMAIL, ADDRESS, WHATSAPP_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, FACEBOOK_LINK } from '../constants';

function Contact() {
    return (
        <section id="contato" className="py-16 bg-primary-700 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 text-font mb-4">Entre em Contato</h2>
                    <p className="text-xl text-accent-900 text-font">Agende sua consulta e dê o primeiro passo</p>
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
                                        <div className="text-accent-900 text-font">@psicolarafrasson</div>
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
                                        <div className="text-accent-900 text-font">Lara Frasson</div>
                                    </div>
                                </a>
                                {/* Facebook */}
                                <a
                                    href={FACEBOOK_LINK}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                                >
                                    <div className="bg-primary-900 p-3 rounded-full transition-colors">
                                        <img src="/assets/icons/facebook.svg" alt="Facebook" width={24} height={24} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent-700 text-font">Facebook</div>
                                        <div className="text-accent text-font">Lara Frasson</div>
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
                                {/* Endereço */}
                                <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                                    <div className="bg-primary-900 p-3 rounded-full transition-colors">
                                        <img src="/assets/icons/address.svg" alt="Endereço" width={24} height={24} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent-700">Endereço</div>
                                        <div className="text-accent-900">{ADDRESS}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Horário de Atendimento */}
                        <div className="bg-primary-100 p-6 rounded-2xl shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto" style={{ maxHeight: '700px', overflowY: 'auto' }}>
                            <h3 className="text-2xl font-semibold text-accent-700 text-font mb-6 text-center">Horário de Atendimento</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Segunda a Sexta:</span>
                                    <span>8h às 20h</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sábado:</span>
                                    <span>8h às 12h</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Domingo:</span>
                                    <span>Fechado</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Localização */}
                    <div className="bg-primary-100 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full min-h-[350px] w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                        {/* Título 'Localização' removido */}
                        <div className="flex-1 w-full h-full min-h-[350px]" style={{ minHeight: '350px' }}>
                            <iframe
                                src="https://www.google.com/maps?q=Rua+Albino+Silva,+455,+Bom+Retiro,+Curitiba,+PR&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '350px' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização da Clínica"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Contact;
