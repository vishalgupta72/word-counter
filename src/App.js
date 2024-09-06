import './App.css';
import Navbar from './components/Navabar';
import TextForm from './components/TextForm';

function App() {

  return (
    <div className="App">
      <Navbar />
      <TextForm heading="Word Counter Application" />
    </div>
  );
}

export default App;
