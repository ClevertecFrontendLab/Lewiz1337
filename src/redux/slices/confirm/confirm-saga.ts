import { call, put, takeLatest } from 'redux-saga/effects';
import { RequestConfirmValue, setStatus } from './confirm-slice';
import { API } from '@utils/api/api';
import { FETCH_CONFIRM } from '@redux/saga/constants';
import { push } from 'redux-first-history';
import { PATH } from '@constants/path';

function* fetchConfirmWorker(action: ActionType<RequestConfirmValue>) {
    try {
        yield put(setStatus('loading'));
        yield call(API.fetchConfirmEmail, action.payload);
        yield put(setStatus('success'));
        yield put(push(PATH.changePassword));
    } catch (error) {
        yield put(setStatus('error'));
    }
}

export function* fetchConfirmWatcher() {
    yield takeLatest(FETCH_CONFIRM, fetchConfirmWorker);
}
