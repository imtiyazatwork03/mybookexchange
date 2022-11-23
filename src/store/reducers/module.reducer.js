import * as actionTypes from '../types/module.type';

const initialState = {
    moduleDetail: {}
}

export const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MODULE_TYPE:
            return { ...state, moduleDetail: action.payload };
        case actionTypes.MODULE_TYPE_SUCCESS:
            return { ...state, moduleDetail: action.payload };
        case actionTypes.MODULE_TYPE_FAILURE:
            return { ...state, moduleDetail: action.payload };
        default: return state;
    }
}