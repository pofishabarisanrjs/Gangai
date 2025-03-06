import './App.css';
import Footer from './components/Footer';
import Section1bg from './components/Section-1';
import Section2bg from './components/Section-2';
import Section3bg from './components/Section-3';
import Section4bg from './components/Section-4';
import Section5bg from './components/Section-5';
function App() {
  return (
    <div className="App">
    <Section1bg/>
    <div>
    <Section2bg/>
    <Section3bg/>
    </div>
    <Section4bg/>
    <Section5bg/>
    {/* <Section6bg/> */}
    <Footer/>
    </div>
    
      
  );
}

export default App;
