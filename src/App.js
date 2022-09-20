import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Topics from './pages/topics/Topics';
import About from './pages/about/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={ <Topics /> } 
        />
      </Routes>
    </Router>
  );
}

export default App;