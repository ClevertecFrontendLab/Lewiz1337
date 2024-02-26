import { call, put, takeLatest } from 'redux-saga/effects';
import { setStatus, setValue } from './registration-slice';
import { API } from '@utils/api/api';
import { FETCH_REGISTRATION } from '@redux/saga/constants';
import { AxiosError } from 'axios';
import { push } from 'redux-first-history';
import { PATH } from '@constants/path';

function* fetchRegistrationWorker(action: ActionType<LoginFormValue>) {
    try {
        yield put(setStatus('loading'));
        yield call(API.fetchRegistration, action.payload);
        yield put(setValue(action.payload));
        yield put(setStatus('success'));
        yield put(push(PATH.success));
    } catch (error) {
        yield put(setStatus('error'));
        yield put(setValue(action.payload));
        const axiosError = error as AxiosError<RejectResponce>;
        if (axiosError.response) {
            if (axiosError.response.status === 409) {
                yield put(push(PATH.errorUserExist));
            } else {
                yield put(push(PATH.error));
            }
        }
    }
}

export function* fetchRegistrationWatcher() {
    yield takeLatest(FETCH_REGISTRATION, fetchRegistrationWorker);
}
