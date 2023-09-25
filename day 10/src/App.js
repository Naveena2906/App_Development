
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login1 from './Login/Login1';
import Signup from './signup/Signup';

// import Dashboard from './Dashboard/Dashboard';
import { Admin } from './Admin/Admin';
 import { Navbar } from './Navbar/Navbar';
import { TopBar } from "./Bar/TopBar";
import { SideBar } from "./Bar/SideBar";
import { Home } from './Home/Home';
// import List from './Products/Product';
import { Products } from './Admin/Product';
import { AddProducts } from './Admin/Addproducts';
import { UpdateProducts } from './Admin/Updateproducts';
import { Reports } from './Admin/Reports';
import { Inventory } from './Admin/Inventory';
import { Orders } from './Admin/Orders';
import { Products1 } from './Admin/Products1';
import About from './Home/About';
// import Productss from './Admin/Productss';
import Privacy from './Home/Privacy';
import Link from './Home/Link';
import Faq from './Home/Faq';
import User from './User/User';
import Terms from './Home/Terms';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
           {/* <Route path='/' element={<Dashboard/>}/> */}
           <Route path='/' element={<Home/>}></Route>
           <Route path='/l' element={<Login1/>}/>
           <Route path='/s' element={<Signup/>}/>
           {/* <Route path='/home' element={<Home/>}/> */}
           <Route path="/admin/:email" element={<Admin/>}/>
           <Route path='/topbar' element={<TopBar/>}></Route>
          <Route path='/sidebar' element={<SideBar/>}></Route>
          <Route path='/list' element={<Products/>}></Route>
          <Route path='/lists' element={<Products1/>}></Route>
          <Route path='/add' element={<AddProducts/>}></Route>
          <Route path='/update' element={<UpdateProducts/>}></Route>
          <Route path='/report' element={<Reports/>}></Route>
          {/* <Route path='/profile' element={<Profile/>}></Route> */}
          <Route path='/in' element={<Inventory/>}></Route>
          <Route path='/order' element={<Orders/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/private' element={<Privacy/>}></Route>
          <Route path='/f' element={<Faq/>}></Route>
          <Route path='/user' element={<User/>}></Route>
          <Route path='/t' element={<Terms/>}></Route>
          {/* <Route path='/link' element={<Link/>}></Route> */}
          {/* <Route path='/im' element={<ImageRotation/>}></Route> */}

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
