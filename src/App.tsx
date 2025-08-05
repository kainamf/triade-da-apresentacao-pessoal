import Hero from './components/Hero';
import About from './components/About';
// import Team from './components/Team';
import Target from './components/Target';
import Footer from './components/Footer';
import Venue from './components/Venue';

function App() {

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Gradient Transition: primary-100 to primary-300 */}
      <div className="h-10 bg-gradient-to-b from-primary-100 to-primary-300"></div>
      
      <About />
      
      {/* Gradient Transition: primary-300 to primary-500 */}
      <div className="h-10 bg-gradient-to-b from-primary-300 to-primary-500"></div>
      
      <Target />
      
      {/* Gradient Transition: primary-500 to primary-700 */}
      <div className="h-10 bg-gradient-to-b from-primary-500 to-primary-700"></div>
      
      <Venue />
      
      <Footer />
    </div>
  );
}

export default App;