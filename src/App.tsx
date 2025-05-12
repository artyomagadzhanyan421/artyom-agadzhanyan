import './App.css';

// Components 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Plans from './components/Plans';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Banner from './components/Banner';
import Showcase from './components/Showcase';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Showcase />
      <Plans />
      <Contact />
      <Faqs />
      <Banner />
    </div>
  )
}

export default App
