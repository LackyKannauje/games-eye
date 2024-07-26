import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav';
import HomePage from './components/home';



function App() {
  return (
    <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/query" element={<HomePage/>} />
    </Routes>
  </Router>
  );
}

export default App;
