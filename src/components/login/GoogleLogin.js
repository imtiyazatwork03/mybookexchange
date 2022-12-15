import React from 'react';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from 'firebase/auth';
import { Auth, Google } from '../../utils/firebase';
import { getProfile, signInWithGoogle } from '../../store/actions/auth.action';

const GoogleLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logInWithGoogle = async () => {
        const result = await signInWithPopup(Auth, Google);
        const { displayName, localId, email } = result._tokenResponse;
        const postData = { email, google_id: localId, name: displayName };
        const user = await dispatch(signInWithGoogle(postData));
        const { success, reason, data } = user;
        if (success) {
            const prop = data?.data;
            toast.success(reason);
            localStorage.setItem('token', prop?.token);
            await dispatch(getProfile());
            navigate('/dashboard')
        } else toast.error(reason);
    }
    return (
        <button type="button" className="button" onClick={logInWithGoogle}>
            <ion-icon name="logo-google"></ion-icon> Continue using google
        </button>
    )
}

export default GoogleLogin;