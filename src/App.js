import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import RegisterSeller from './pages/RegisterSeller';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
import TermAndCondition from './pages/TermAndCondition';
import UnderConstruction from './pages/UnderConstruction';
import Profile from './pages/Profile';
import ProfileUpdate from './pages/ProfileUpdate';
import PrivateRoutes from './utils/PrivateRoutes';
import { ListBooks } from './pages/ListBooks';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';
import MyListingBooks from './pages/MyListingBooks';
import AboutUs from './pages/AboutUs';
import UserAgreement from './pages/UserAgreement';
import Updates from './pages/Updates';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/profile">
                        <Route index={true} element={<Profile />} />
                        <Route index={false} element={<ProfileUpdate />} path="update" />
                    </Route>
                </Route>
                <Route element={<Home />} path="/" />
                <Route element={<LogIn />} path="/login" />
                <Route element={<Register />} path="/register" />
                <Route element={<RegisterSeller />} path="/register-seller" />
                <Route element={<ForgotPassword />} path="/forgot-password" />
                <Route element={<NotFound />} path="/not-found" />
                <Route element={<TermAndCondition />} path="/term-and-condition" />
                <Route element={<UnderConstruction />} path="/under-construction" />
                <Route element={<MyListingBooks />} path="/my-listing-books" />
                <Route element={<ListBooks />} path="/list-books" />
                <Route element={<Dashboard />} path="/dashboard" />
                <Route element={<Cart />} path="/cart" />
                <Route element={<AboutUs />} path="/aboutus" />
                <Route element={<UserAgreement />} path="/useragreement" />
                <Route element={<Updates />} path="/updates" />
                <Route element={<ContactUs />} path="/contactus" />
                <Route element={<PrivacyPolicy />} path="/privacypolicy" />
                <Route path="*" element={<Home />} />
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Router>
    );
}

export default App;
