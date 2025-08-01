import Home from './pages/HomePage';
import Info from './pages/Info';
import PhotoPage from './pages/PhotoPage';
import ResultsPage from './pages/ResultsPage';
import SummaryPage from './pages/SummaryPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/upload" element={<PhotoPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/analysis" element={<SummaryPage />} />

      </Routes>
    </Router>
  )
}

export default App;
