import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Values from './components/Values';
import BrunaSpecialist from './components/BrunaSpecialist';
import RaquelSpecialist from './components/RaquelSpecialist';
import LeandraSpecialist from './components/LeandraSpecialist';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FreeMaterialsSection from './components/FreeMaterialsSection';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <Services />
            <About />
            <Values />
            <BrunaSpecialist />
            <RaquelSpecialist />
            <LeandraSpecialist />
            <FreeMaterialsSection />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;