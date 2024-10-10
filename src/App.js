import './App.css';
import './styles.css';
import Header from './components/Header';
import Description from './components/Description';
import Product from './components/Product';
import Solution from './components/Solution';
import Cta from './components/Cta';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <Description></Description>
        <Product></Product>
        <Solution></Solution>
        <Cta></Cta>
      </div>
      <footer className="footer">
        <p className="footer">Footer</p>
      </footer>
    </div>
  );
}

export default App;
