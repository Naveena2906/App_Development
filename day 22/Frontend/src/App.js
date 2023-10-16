
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
import Purchase from './User/Purchase';
// import { Orders } from './Admin/Orders';
import Orders from './User/Userorders';
import { Products1 } from './Admin/Products1';
import About from './Home/About';
// import Productss from './Admin/Productss';
import Privacy from './Home/Privacy';
import Link from './Home/Link';
import Faq from './Home/Faq';
import User from './User/User';
import Terms from './Home/Terms';
import Cart from './User/Cart';
import { AdminAuth } from './Admin/Adminauth';
import Userrauth from './User/Userrauth';
import Adminsauth from './Admin/Adminsauth';
import { Userproduct } from './User/Userproduct';
import Userorders from './User/Userorders';
import Feedback from './User/Feedback';
import Reviews from './User/Reviews';
import UserviewReview from './Admin/UserviewReview';
import { States } from './States';
import Checkout from './User/Checkout';
import UserviewOrder from './Admin/UserviewOrder';
import Dashboard from './Admin/Dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <States>
      <Routes>
           {/* <Route path='/' element={<Dashboard/>}/> */}
           <Route path='/' element={<Home/>}></Route>
           <Route path='/l' element={<Login1/>}/>
           <Route path='/s' element={<Signup/>}/>
           <Route path='/topbar' element={<TopBar/>}></Route>
          <Route path='/sidebar' element={<SideBar/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/private' element={<Privacy/>}></Route>
          <Route path='/f' element={<Faq/>}></Route>
          <Route path='/t' element={<Terms/>}></Route>
           {/* <Route path='/home' element={<Home/>}/> */}
          {/* <Route path='/profile' element={<Profile/>}></Route> */}
          {/* <Route path='/in' element={<Inventory/>}></Route> */}

               {/* <Route path='/admin/dashboard' element={<Admin/>}/> */}
          <Route element={<Adminsauth/>}>
               <Route path='/admin/dashboard' element={<Admin/>}/>
               <Route path='/list' element={<Products/>}></Route>
               {/* <Route path='/lists' element={<Products1/>}></Route> */}
               <Route path='/add' element={<AddProducts/>}></Route>
               <Route path='/admin/update/:id' element={<UpdateProducts/>}></Route>
               <Route path='/report' element={<Reports/>}></Route>
               <Route path='/userview/review' element={<UserviewReview/>}></Route>
               <Route path='/userview/order' element={<UserviewOrder/>}></Route>
               <Route path='/userview/dashboard' element={<Dashboard/>}></Route>

               
              {/* <Route path='/order' element={<Orders/>}></Route> */}
          </Route>


          <Route element={<Userrauth/>}>
              <Route exact path='/user/dashboard' element={<User/>}></Route>
              <Route path='/userview' element={<Userproduct/>}/>
              <Route path='/user/cart' element={<Cart/>}></Route>
              <Route path='/user/purchase' element={<Purchase/>}></Route>
              <Route path='/user/checkout' element={<Checkout/>}></Route>
              <Route path='/user/review' element={<Reviews/>}/>
              <Route path='/user/feedback' element={<Feedback/>}/>
              <Route path='/user/orders' element={<Orders/>}/>

          </Route>
          {/* <Route path='/link' element={<Link/>}></Route> */}
          {/* <Route path='/im' element={<ImageRotation/>}></Route> */}

      </Routes>
      </States>
      </BrowserRouter>
    </div>
  );
}

export default App;
