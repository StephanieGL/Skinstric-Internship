import Intro from './pages/HomePage';
import Info from './pages/Info';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/info" element={<Info />} />
       
      </Routes>
    </Router>
  )
}

export default App
