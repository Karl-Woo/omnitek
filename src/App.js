import './App.css';
import './styles.css';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Products from './components/Products';
import Applications from './components/Applications';
import Contactus from './components/Contactus';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
        <Router>
          <nav className="navbar">
            <div className="navbar-left">
              <a href="/" className="logo">
              <img className="homeimg" src={`./omnitek/images/home.png`} alt="home" />
              </a>
            </div>

            <div className="navbar-right">
              <ul>
                <li>
                  <a className="textlink" href="/">Home</a>
                </li>
                <li>
                  <a className="textlink" href="/aboutus">About us</a>
                </li>
                <li>
                  <a className="textlink" href="/products">Products</a>
                </li>
                <li>
                  <a className="textlink" href="/applications">Applications</a>
                </li>
                <li>
                  <a className="textlink" href="/products">Search</a>
                </li>
              </ul>
              <a href="/contactus"><button className="primary-button">Contact Us</button></a>
            </div>
            
          </nav>
          <div className='container'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutus" element={<Aboutus />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/applications" element={<Applications />}></Route>
            <Route path="/contactus" element={<Contactus />}></Route>
          </Routes>
          </div>
        </Router>
      
      <footer className="footer">
        <p className="footer">Footer</p>
      </footer>
    </div>
  );
}

export default App;
