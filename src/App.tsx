import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import VideoCall from './components/VideoCall/VideoCall';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:uuid" element={<Home />} />
        <Route path="/call/:uuid" element={<VideoCall />} />
      </Routes>
    </Router>
  );
}

export default App;