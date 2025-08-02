import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import BrunaSpecialist from './components/BrunaSpecialist';
import RaquelSpecialist from './components/RaquelSpecialist';
import LeandraSpecialist from './components/LeandraSpecialist';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Loading from './components/Loading';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula o carregamento dos componentes e recursos
        const loadResources = async () => {
            // Aguarda um tempo mínimo para mostrar o loading
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Aqui você pode adicionar outras verificações de carregamento se necessário
            // Por exemplo: verificar se imagens foram carregadas, APIs responderam, etc.
            
            setIsLoading(false);
        };

        loadResources();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <About />            
            <BrunaSpecialist />
            <RaquelSpecialist />
            <LeandraSpecialist />
            <Values />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;