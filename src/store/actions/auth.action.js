import * as actionTypes from '../types/auth.type';
import { register, login, logInWithGoogle, logInWithFacebook, profile, profileUpdate, stateList } from '../../shared/services/app.services';

export const signUp = payload => dispatch => {
    dispatch({ type: actionTypes.SIGNUP, payload: undefined });
    return register(payload).then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.SIGNUP_SUCCESS, payload: data.data });
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.SIGNUP_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;;
    });
};

export const updateProfile = payload => dispatch => {
    dispatch({ type: actionTypes.PROFILE_UPDATE, payload: undefined });
    return profileUpdate(payload).then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.PROFILE_UPDATE_SUCCESS, payload: data.data });
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.PROFILE_UPDATE_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;;
    });
};

export const signIn = payload => dispatch => {
    dispatch({ type: actionTypes.SIGNIN, payload: undefined });
    return login(payload).then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.SIGNIN_SUCCESS, payload: data.data });
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.SIGNIN_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;;
    });
};

export const signInWithGoogle = payload => dispatch => {
    dispatch({ type: actionTypes.SIGNIN_WITH_GOOGLE, payload: undefined });
    return logInWithGoogle(payload).then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.SIGNIN_WITH_GOOGLE_SUCCESS, payload: data.data });
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.SIGNIN_WITH_GOOGLE_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;;
    });
};

export const signInWithFacebook = payload => dispatch => {
    dispatch({ type: actionTypes.SIGNIN_WITH_FACEBOOK, payload: undefined });
    return logInWithFacebook(payload).then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.SIGNIN_WITH_FACEBOOK_SUCCESS, payload: data.data });
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.SIGNIN_WITH_FACEBOOK_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;;
    });
};

export const getProfile = () => dispatch => {
    dispatch({ type: actionTypes.PROFILE, payload: undefined });
    return profile().then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.PROFILE_SUCCESS, payload: data.data });
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.PROFILE_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;;
    });
};

export const getState = () => dispatch => {
    dispatch({ type: actionTypes.STATE_LIST, payload: undefined });
    return stateList().then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.STATE_LIST_SUCCESS, payload: data.data });
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.STATE_LIST_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;;
    });
};