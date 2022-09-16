import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Topics from './pages/topics/Topics';
import About from './pages/about/About';

function App() {
  const topic = window.location.pathname.substring(1).toLowerCase()
  const subTopic = new URLSearchParams(window.location.search).get("section")
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/about" element={<About />} />
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