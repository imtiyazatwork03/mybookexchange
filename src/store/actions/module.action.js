import * as actionTypes from '../types/module.type';
import { moduleDetail } from '../../shared/services/app.services';

export const moduleDetailAction = payload => dispatch => {
    dispatch({ type: actionTypes.MODULE_TYPE, payload: undefined });
    return moduleDetail(payload).then(response => {
        const { success, data } = response.data;
        if (success) dispatch({ type: actionTypes.MODULE_TYPE_SUCCESS, payload: data.data });
        return response.data;
    }, error => {
        dispatch({ type: actionTypes.MODULE_TYPE_FAILURE, payload: { message: 'Error please check data!' } });
        return error.response.data;
    });
};