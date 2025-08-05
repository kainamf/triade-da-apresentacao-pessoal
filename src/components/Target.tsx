export default function Target() {
  const targetAudience = [
    {
      title: "Pessoas interessadas em autoconhecimento e fortalecimento pessoal",
      description: "Você que busca se reconectar com sua essência e desenvolver uma imagem com intencionalidade",
      benefit: "Descubra sua autenticidade e presença única"
    },
    {
      title: "Profissionais que querem se comunicar estrategicamente",
      description: "Homens e mulheres que desejam fortalecer sua presença e impacto em suas redes sociais e profissionais",
      benefit: "Amplify seu networking e influência pessoal"
    },
    {
      title: "Pessoas que buscam desenvolvimento de imagem completo",
      description: "Quem quer construir sua apresentação pessoal nos pilares da Comunicação, Imagem e Etiqueta",
      benefit: "Transforme sua carreira e oportunidades"
    }
  ];

  return (
    <section id="publico" className="py-20 bg-primary-500 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-script text-font mb-4">
            Este evento é para você que:
          </h2>
          <p className="text-xl text-font max-w-3xl mx-auto">
            Esperamos um público engajado, com grande potencial de influência em suas redes e círculos sociais
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {targetAudience.map((item, index) => (
              <div key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-tertiary-100 border-2 border-secondary-500 rounded-3xl p-6 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-secondary-700 mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-secondary-700 leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  <div className="bg-primary-300 text-secondary-700 px-4 py-2 rounded-full text-sm font-semibold text-center">
                    {item.benefit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-background rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-font mb-4">
              Você se identificou com algum desses perfis?
            </h3>
            <p className="text-lg text-font mb-6">
              Então este evento foi pensado especialmente para você! Junte-se a nós nesta 
              jornada de autoconhecimento e desenvolvimento pessoal.
            </p>
            <button className="bg-secondary-300 text-background px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Quero Participar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}