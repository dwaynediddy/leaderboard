import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './screens/Home'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
