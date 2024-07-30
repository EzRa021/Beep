import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import Contact from './pages/contact';
import MarketPlace from './pages/marketPlace';
import Faq from './pages/faq';
import AccountSetting from './dashboard/accountSetting';
import AdDetails from './dashboard/adDetails';
import AdList from './pages/adList';
import DashboardPage from './dashboard/dashboard';
import MyAd from './dashboard/myAd';
import PostAds from './dashboard/postAds';
import SignIn from './auth/signIn';
import SignUp from './auth/signUp';
import { AuthProvider, AuthContext } from './context/AuthContext';
import UserProvider from './context/UserContext';
import AdProvider from './context/AdContext';
import { useContext, useEffect, useState } from 'react';
import Loader from './components/loader';
import SingleAds from './pages/singleAds';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AppContent = () => {
  const location = useLocation();
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const noHeaderFooterPaths = ['/overview', '/post-ads', '/my-ads', '/account-settings', "/ad-details/:id"];
  const isDashboardPath = noHeaderFooterPaths.includes(location.pathname);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, [setUser]);

  if (loading) {
    return <div><Loader/></div>; // Or a spinner/loading indicator
  }

  if (!user && isDashboardPath) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <>
      {!isDashboardPath && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/market-place" element={<MarketPlace />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/single-ad/:id" element={<SingleAds />} />
        <Route path="/ad-list" element={<AdList />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/ad-details/:id" element={<AdDetails />} />
        <Route path="/overview" element={<DashboardPage />} />
        <Route path="/post-ads" element={<PostAds />} />
        <Route path="/my-ads" element={<MyAd />} />
        <Route path="/account-settings" element={<AccountSetting />} />
      </Routes>
      {!isDashboardPath && <Footer />}
    </>
  );
};



function App() {
  return (
    <Router>
       <ToastContainer />
      <UserProvider>
        <AdProvider>
          <AuthProvider>
            <AppContent />
          </AuthProvider>
        </AdProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
