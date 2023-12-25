
import './App.css';
import About from './container/About';
import Footer from './container/Footer';
import Home from './container/Home';
import Navi from './container/Navi';
import Skills from './container/Skills';
import Works from './container/Works';


function App() {
  return (
    <div className="App">
      <Navi/>
      <Home/>
      <About/>
      <Skills/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
