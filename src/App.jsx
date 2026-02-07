import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
// import VideoShowcase from './components/VideoShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <Hero />
        <Services />
        <Features />
        {/* <VideoShowcase /> */}
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
