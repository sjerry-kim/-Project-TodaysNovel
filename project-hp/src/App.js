import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Layout from './pages/Layout';
import About from './pages/About';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import MyPageReview from './components/MyPageReview';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<Main />} />
          <Route path='/main' element={<Main />}/>
            <Route path='/main/:id' element={<Detail/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/mypage/:id' element={<MyPageReview />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
