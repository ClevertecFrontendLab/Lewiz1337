import { FETCH_CHANGE_PASSWORD } from '@redux/saga/constants';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ChangePasswordValue, setStatus, setValue } from './change-password-slice';
import { API } from '@utils/api/api';
import { push } from 'redux-first-history';
import { PATH } from '@constants/path';

function* fetchChangePasswordWorker(action: ActionType<ChangePasswordValue>) {
    try {
        yield put(setStatus('loading'));
        yield put(setValue(action.payload));
        yield call(API.fetchChangePassword, action.payload);
        yield put(setStatus('success'));
        yield put(push(PATH.successChangePassword));
    } catch (error) {
        yield put(setStatus('error'));
        yield put(push(PATH.errorChangePassword));
    }
}

export function* fetchChangePasswordWatcher() {
    yield takeLatest(FETCH_CHANGE_PASSWORD, fetchChangePasswordWorker);
}
