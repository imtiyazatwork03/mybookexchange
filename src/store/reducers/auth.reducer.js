import * as actionTypes from '../types/auth.type';

const token = localStorage.getItem("token");

const initialState = {
    signup: {
        username: '',
        email: ''
    },
    signin: {
        username: '',
        email: '',
        token: '' || token
    },
    profile: {
        name: '',
        email: ''
    },
    states: []
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP:
            return { ...state, signup: action.payload };
        case actionTypes.SIGNUP_SUCCESS:
            return { ...state, signup: action.payload };
        case actionTypes.SIGNUP_FAILURE:
            return { ...state, signup: action.payload };
        case actionTypes.SIGNIN:
            return { ...state, signin: action.payload };
        case actionTypes.SIGNIN_SUCCESS:
            return { ...state, signin: action.payload };
        case actionTypes.SIGNIN_FAILURE:
            return { ...state, signin: action.payload };
        case actionTypes.SIGNIN_WITH_GOOGLE:
            return { ...state, signin: action.payload };
        case actionTypes.SIGNIN_WITH_GOOGLE_SUCCESS:
            return { ...state, signin: action.payload };
        case actionTypes.SIGNIN_WITH_GOOGLE_FAILURE:
            return { ...state, signin: action.payload };
        case actionTypes.PROFILE:
            return { ...state, profile: action.payload };
        case actionTypes.PROFILE_SUCCESS:
            return { ...state, profile: action.payload };
        case actionTypes.PROFILE_FAILURE:
            return { ...state, profile: action.payload };
        case actionTypes.STATE_LIST:
            return { ...state, states: action.payload };
        case actionTypes.STATE_LIST_SUCCESS:
            return { ...state, states: action.payload };
        case actionTypes.STATE_LIST_FAILURE:
            return { ...state, states: action.payload };
        default: return state;
    }
}