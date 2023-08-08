import logo from './logo.svg';
import './App.css';
import { Nav } from './Components/Nav';
import { AllRoutes } from './Components/AllRoutes';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Nav/>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
