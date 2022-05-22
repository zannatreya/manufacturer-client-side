import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Pages/Home/Blogs';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Tools from './Pages/Home/Tools';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="purchase/:id" element={<Purchase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
