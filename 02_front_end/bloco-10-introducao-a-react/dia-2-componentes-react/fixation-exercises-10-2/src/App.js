import Image from './Image';
import './App.css';
import Header from './header';

function App() {
  return (
    <div className='App'>
      <Image source={Image} alternativeText="Cute cat staring" />
      <Header message='Fantástica fábrica - Séries' />
    </div>
  );
}

export default App;
