import './App.css';

// Components 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Plans from './components/Plans';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Process />
      <Plans />
    </div>
  )
}

export default App
