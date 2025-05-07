import './App.css';
import Login from './Login';
import Signin from './Signin';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbars from './navbars';
import Wish from './Wish';
// import {  } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbars/>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/wish' element={<Wish/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
