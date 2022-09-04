import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Page from './Page';
import NotFound from './NotFound';
import About from './About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/loops" element={<Page page="Loops"/>} />
        <Route exact path="/sorting" element={<Page page="Sorting"/>} />
        <Route exact path="/searching" element={<Page page="Searching"/>} />
        <Route exact path="/" element={<Page page="Home"/>} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;