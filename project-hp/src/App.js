import './App.css';
import { Route, Routes } from 'react-router-dom';
import Pink from './pages/Pink';
import Layout from './pages/Layout';
import Blue from './pages/Blue';
import Yellow from './pages/Yellow';
import About from './pages/About';
import Cart from './pages/Cart';
import PinkProducts from './pages/PinkProducts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<Pink />} />
          <Route path='/pink' element={<Pink />}>
            <Route path='/pink/:title'element={<PinkProducts/>}/>
          </Route>
          <Route path='/blue' element={<Blue />} />
          <Route path='/yellow' element={<Yellow />} />
          <Route path='/about' element={<About />}/>
          <Route path='/cart' element={<Cart />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
