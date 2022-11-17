import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ListBooks } from './pages/ListBooks';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import RegisterSeller from './pages/RegisterSeller';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
import TermAndCondition from './pages/TermAndCondition';
import UnderConstruction from './pages/UnderConstruction';
import ProfileUpdate from './pages/ProfileUpdate';
import PrivateRoutes from './utils/PrivateRoutes';
import Cart from './pages/Cart';
import MyListingBooks from './pages/MyListingBooks';
import AboutUs from './pages/AboutUs';
import UserAgreement from './pages/UserAgreement';
import Updates from './pages/Updates';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LandingView from './pages/LandingView';
import { useDispatch } from 'react-redux';
import { getProfile, getState } from './store/actions/auth.action';
import { useEffect } from 'react';
import SearchBook from './components/search/SearchBook';

const App = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    useEffect(()=>{
        if (token) {
            dispatch(getProfile());
            dispatch(getState());
        }
    }, [dispatch, token]);
    return (
        <Router>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/profile">
                        <Route index={true} element={<ProfileUpdate />} />
                    </Route>
                    <Route index={false} element={<ListBooks />} path="/list-books" />
                    <Route index={false} element={<ListBooks />} path="/list-books/:id" />
                    <Route index={false} element={<MyListingBooks />} path="/my-listing-books" />
                    <Route index={false} element={<Cart />} path="/cart" />
                </Route>
                <Route element={<SearchBook />} path="search-book" />
                <Route element={<LandingView />} path="/" />
                <Route element={<Register />} path="/register" />
                <Route element={<RegisterSeller />} path="/register-seller" />
                <Route element={<LogIn />} path="/login" />
                <Route element={<ForgotPassword />} path="/forgot-password" />
                <Route element={<NotFound />} path="/not-found" />
                <Route element={<TermAndCondition />} path="/term-and-condition" />
                <Route element={<UnderConstruction />} path="/under-construction" />
                <Route element={<AboutUs />} path="/aboutus" />
                <Route element={<UserAgreement />} path="/useragreement" />
                <Route element={<Updates />} path="/updates" />
                <Route element={<ContactUs />} path="/contactus" />
                <Route element={<PrivacyPolicy />} path="/privacypolicy" />
                <Route path="*" element={<LandingView />} />
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
