import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Topics from './pages/topics/Topics';
import NotFound from './pages/notFound/NotFound';
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/404" element={<NotFound />} />
        <Route path="*" element={<Topics page={window.location.pathname.substring(1).toLowerCase()}/>} />
      </Routes>
    </Router>
  );
}

export default App;