import { createSelector } from 'reselect';

const moduleDetail = state => state.module.moduleDetail;

export const moduleDetailSelector = createSelector(moduleDetail, detail => detail || {});