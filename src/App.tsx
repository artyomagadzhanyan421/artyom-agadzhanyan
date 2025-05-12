import './App.css';

// Components 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Plans from './components/Plans';
import Faqs from './components/Faqs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Process />
      <Plans />
      <Faqs />
    </div>
  )
}

export default App
