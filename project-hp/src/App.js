import './App.css';
import { Route, Routes } from 'react-router-dom';
import Pink from './pages/Pink';
import Layout from './pages/Layout';
import Blue from './pages/Blue';
import Yellow from './pages/Yellow';
import About from './pages/About';
import Cart from './pages/Cart';
import PinkProducts from './pages/PinkProducts';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import ReviewModal from './components/ReviewModal';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<Pink />} />
          <Route path='/pink' element={<Pink />}/>
            <Route path='/pink/:id' element={<PinkProducts/>}/>
            {/* <Route path='/pink/:search' element={<Search />}/> */}
          <Route path='/blue' element={<Blue />} />
          <Route path='/yellow' element={<Yellow />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/mypage/:id' element={<ReviewModal />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
