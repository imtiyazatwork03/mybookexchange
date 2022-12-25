import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ListBooks } from './pages/ListBooks';
import { useDispatch } from 'react-redux';
import { getProfile, getState } from './store/actions/auth.action';
import { useEffect } from 'react';
import LogIn from './pages/LogIn';
import RegisterSeller from './pages/RegisterSeller';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
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
import SearchBook from './components/search/SearchBook';
const Register = lazy(() => import('./pages/Register'));

const App = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            dispatch(getProfile());
            dispatch(getState());
        }
    }, [dispatch, token]);
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route path="/editmembership">
                            <Route index={true} element={<ProfileUpdate />} />
                        </Route>
                        <Route index={false} element={<ListBooks />} path="/listbooks" />
                        <Route index={false} element={<ListBooks />} path="/listbooks/:id" />
                        <Route index={false} element={<MyListingBooks />} path="/managebooks" />
                        <Route index={false} element={<Cart />} path="/mycart" />
                    </Route>
                    <Route element={<LandingView />} path="/" />
                    <Route element={<Register />} path="/joinnow" />
                    <Route element={<RegisterSeller />} path="/register" />
                    <Route element={<LogIn />} path="/login" />
                    <Route element={<SearchBook />} path="searchbook" />
                    <Route element={<ForgotPassword />} path="/forgetpassword" />
                    <Route element={<NotFound />} path="/notfound" />
                    <Route element={<UnderConstruction />} path="/underconstruction" />
                    <Route element={<AboutUs />} path="/aboutus" />
                    <Route element={<Updates />} path="/updates" />
                    <Route element={<ContactUs />} path="/contactus" />
                    <Route element={<UserAgreement />} path="/useragreement" />
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
            </Suspense>
        </Router>
    );
}

export default App;
