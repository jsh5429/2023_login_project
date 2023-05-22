import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './page/Home';
import Main from './page/Main';
import Login from './page/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/main' element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
