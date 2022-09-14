import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Page from './pages/topics/Topics';
import NotFound from './pages/notFound/NotFound';
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/loops" element={<Page page="Loops"/>} />
        <Route exact path="/structs" element={<Page page="Structs"/>} />
        <Route exact path="/sorting" element={<Page page="Sorting"/>} />
        <Route exact path="/searching" element={<Page page="Searching"/>} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;