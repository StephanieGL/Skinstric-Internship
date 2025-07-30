import Home from './pages/HomePage';
import Info from './pages/Info';
import PhotoPage from './pages/PhotoPage';
import ResultsPage from './pages/ResultsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/upload" element={<PhotoPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  )
}

export default App;
