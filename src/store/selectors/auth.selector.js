import { createSelector } from 'reselect';

const signup = state => state.auth.signup;
const signin = state => state.auth.signin;
const profile = state => state.auth.profile;
const states = state => state.auth.states;

export const userSignUp = createSelector(signup, user => user);
export const userToken = createSelector(signin, user => user?.token);
export const userTokenSignUp = createSelector(signup, user => user?.token);
export const userProfile = createSelector(profile, user => user);
export const stateList = createSelector(states, statesData => statesData || []);