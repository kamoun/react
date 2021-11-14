import './App.css';
import About from './Pages/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
