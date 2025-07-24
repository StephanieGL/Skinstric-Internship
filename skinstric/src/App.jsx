import Home from './pages/HomePage';
import Info from './pages/Info';
import PhotoPage from './pages/PhotoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/upload" element={<PhotoPage />} />
      </Routes>
    </Router>
  )
}

export default App;
