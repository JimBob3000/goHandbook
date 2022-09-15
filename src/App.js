import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Topics from './pages/topics/Topics';
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  const topic = window.location.pathname.substring(1).toLowerCase()
  const subTopic = new URLSearchParams(window.location.search).get("section")
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" 
          element={
            <Topics 
              topic={topic}
              subTopic={subTopic}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;