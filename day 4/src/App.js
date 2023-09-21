
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login1 from './Login/Login1';
import Signup from './signup/Signup';
import Home from './Home/Home';
// import Dashboard from './Dashboard/Dashboard';
import { Admin } from './Admin/Admin';
 import { Navbar } from './Navbar/Navbar';
import { TopBar } from "./Bar/TopBar";
import { SideBar } from "./Bar/SideBar";
// import List from './Products/Product';
import { Products } from './Admin/Product';
import { AddProducts } from './Admin/Addproducts';
import { UpdateProducts } from './Admin/Updateproducts';
import { Reports } from './Admin/Reports';
import { Profile } from './Admin/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
           {/* <Route path='/' element={<Dashboard/>}/> */}
           <Route path='/' element={<Navbar/>}></Route>
           <Route path='/l' element={<Login1/>}/>
           <Route path='/s' element={<Signup/>}/>
           <Route path='/h' element={<Home/>}/>
           <Route path="/admin/:email" element={<Admin/>}/>
           <Route path='/topbar' element={<TopBar/>}></Route>
          <Route path='/sidebar' element={<SideBar/>}></Route>
          <Route path='/list' element={<Products/>}></Route>
          <Route path='/add' element={<AddProducts/>}></Route>
          <Route path='/update' element={<UpdateProducts/>}></Route>
          <Route path='/report' element={<Reports/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
