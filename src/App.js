import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Topics from './pages/topics/Topics';
import About from './pages/about/About';
import { useState } from 'react';

function App() {
  const topic = window.location.pathname.substring(1).toLowerCase()
  const subTopic = new URLSearchParams(window.location.search).get("section")

  const [currentTopic, setCurrentTopic] = useState(topic)
  const [currentSubTopic, setCurrentSubTopic] = useState(subTopic)

  return (
    <Router>
      <Navbar 
        currentTopic={currentTopic} 
        setCurrentTopic={setCurrentTopic}
        currentSubTopic={currentSubTopic} 
        setCurrentSubTopic={setCurrentSubTopic}
      />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={ 
          <Topics 
            currentTopic={currentTopic} 
            setCurrentTopic={setCurrentTopic}
            currentSubTopic={currentSubTopic} 
            setCurrentSubTopic={setCurrentSubTopic}
          />
        }/>
      </Routes>
    </Router>
  );
}

export default App;