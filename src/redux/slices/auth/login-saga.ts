import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { SuccessLoginResponce, setStatus, setValue } from './login-slice';
import { API } from '@utils/api/api';
import { FETCH_AUTH } from '@redux/saga/constants';
import { push } from 'redux-first-history';
import { PATH } from '@constants/path';
import { AxiosResponse } from 'axios';

function* fetchAuthWorker(action: ActionType<LoginFormValue>) {
    try {
        yield put(setStatus('loading'));
        yield put(setValue(action.payload));
        const responce: AxiosResponse<SuccessLoginResponce> = yield call(API.fetchAuth, action.payload);
        yield call(() => {
            if (action.payload.remember) {
                localStorage.setItem('jwtToken', JSON.stringify(responce.data.accessToken));
            } else {
                sessionStorage.setItem('jwtToken', JSON.stringify(responce.data.accessToken));
            }
        });
        yield delay(200);
        yield put(setStatus('success'));
        yield put(push(PATH.main));
    } catch (error) {
        yield put(setStatus('error'));
        yield put(push(PATH.errorLogin));
    }
}

export function* fetchAuthWatcher() {
    yield takeLatest(FETCH_AUTH, fetchAuthWorker);
}
