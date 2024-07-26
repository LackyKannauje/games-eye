import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav';
import HomePage from './components/home';

function App() {
  const apiKey = process.env.REACT_APP_GAMES_API_KEY;
  return (
    <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<HomePage apiKey={apiKey}/>} />
      <Route exact path="/query" element={<HomePage apiKey={apiKey}/>} />
    </Routes>
  </Router>
  );
}

export default App;
