import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Pages/Home/Blogs';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Tools from './Pages/Home/Tools';
import RequireAuth from './Pages/Login/RequireAuth';
import PurchaseDetails from './Pages/Purchase/PurchaseDetails';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyPortfolio from './Pages/MyPortfolio';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/myprofile" element={<MyProfile />} /> */}
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/purchase/:purchaseId" element={
          <RequireAuth>
            <PurchaseDetails />
          </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyOrders />}></Route>
          <Route path="review" element={<AddReview />}> </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
