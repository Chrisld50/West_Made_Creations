import './App.css';
import Header from './components/Header';
import Home from './components/Home'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="App background">

      <div>
        <Header />
      </div>

      <div>
      <Home />
      </div>

      <div>
      <Footer />
      </div>

    </div>
  );
}

export default App;
