import { API } from '@utils/api/api';
import { setStatus } from './check-email-slice';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { FETCH_CHECK_EMAIL } from '@redux/saga/constants';
import { push } from 'redux-first-history';
import { PATH } from '@constants/path';

function* fetchCheckEmailWorker(action: ActionType<LoginFormValue>) {
    try {
        yield put(setStatus('loading'));
        yield call(API.fetchCheckEmail, action.payload);
        yield put(setStatus('success'));
        yield put(push(PATH.confirmEmail));
    } catch (error) {
        yield put(setStatus('error'));
        const axiosError = error as AxiosError<RejectResponce>;
        if (axiosError.response) {
            const { message } = axiosError.response.data;
            if (axiosError.response.status == 404 && message == 'Email не найден') {
                yield put(push(PATH.errorCheckEmailNoExist));
            } else {
                yield put(push(PATH.errorCheckEmail));
            }
        }
    }
}

export function* fetchCheckEmailWatcher() {
    yield takeLatest(FETCH_CHECK_EMAIL, fetchCheckEmailWorker);
}
