import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pink from './pages/Pink';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='pink' element={<Pink />} />
      </Routes>
    </div>
  );
}

export default App;
