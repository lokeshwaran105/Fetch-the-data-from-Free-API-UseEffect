import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Link } from 'react-router-dom';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/footer">Footer</Link></li>
        <li><Link to="/data">Data</Link></li>
      </ul>
    </>
  );
}

export default App;
