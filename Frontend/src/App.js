import './App.css';
import VendorPage from './pages/VendorPage';
import LandingPage from './pages/LandingPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ExplorePage from './pages/ExplorePage';
import ProductDetailPage from './pages/ProductDetailPage';
import UserDashboard from './pages/UserDashboard';
import LoginPage from './pages/LoginPage';
import VendorRegistration from './pages/VendorRegistration';
import CPCategorySection from './components/CategoryPage/CPCategorySection';


function App() {
  
  return (
       <Router>
    <div className="App">
    <Routes>
          <Route exact path='/' element={<LandingPage />}></Route>
          <Route path="/vendor" element={<VendorPage />}> </Route>
          <Route  path='/:category' element={<ProductsPage />}></Route>
          <Route  path='/explore' element={<ExplorePage />}></Route>
          <Route  path='/:category/:id' element={<ProductDetailPage />}></Route>
          <Route  path='/user' element={<UserDashboard />}></Route>
          <Route  path='/userlogin' element={<LoginPage for='user' page="login" />}></Route>
          <Route  path='/usersignup' element={<LoginPage for='user' page="signUp" />}></Route>
          <Route  path='/vendorlogin' element={<LoginPage for='vendor' page="login" />}></Route>
          <Route  path='/vendorregistration' element={<VendorRegistration />}></Route>

          {/* <Route exact path='/admin' element={<AdminPage />}></Route> */}
          {/* <Route exact path='/' element={<Dashboard />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />} > </Route>   
          <Route path="/customer" element={<Customer />}> </Route>
          <Route exact path="/password" element={<Password />} > </Route>  */}
    </Routes>
    </div>
    </Router>
  );
}

export default App;
