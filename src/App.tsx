import './App.css';

// Components 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Plans from './components/Plans';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Process />
      <Plans />
      <Contact />
      <Faqs />
      <Banner />
    </div>
  )
}

export default App
