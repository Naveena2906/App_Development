
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login1 from './Login/Login1';
import Signup from './signup/Signup';
import Home from './Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
           <Route path='/' element={<Login1/>}/>
           <Route path='/s' element={<Signup/>}/>
           <Route path='/h' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
