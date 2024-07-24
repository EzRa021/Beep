import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import About from "./pages/about"
import Home from "./pages/home"
import Contact from './pages/contact';
import MarketPlace from './pages/marketPlace';
import Faq from './pages/faq';
import AccountSetting from './dashboard/accountSetting';
import AdDetails from './dashboard/adDetails';
import AdList from './dashboard/adList';
import DashboardPage from './dashboard/dashboard';
import MyAd from './dashboard/myAd';
import PostAdSuccess from './dashboard/postAdSuccess';
import PostAds from './dashboard/postAds';
import SignIn from './auth/signIn';
import SignUp from './auth/signUp';
// import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="market-place" element={<MarketPlace />} />
          <Route path="faq" element={<Faq />} />'
          <Route path="account-settings" element={<AccountSetting />} />
          <Route path="ad-details" element={<AdDetails />} />
          <Route path="ad-list" element={<AdList />} />
          <Route path="overview" element={<DashboardPage />} />
          <Route path="my-ad" element={<MyAd />} />
          <Route path="post-ads" element={<PostAds />} />
          <Route path="post-ads-success" element={<PostAdSuccess />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
    </>

  )
}

export default App
