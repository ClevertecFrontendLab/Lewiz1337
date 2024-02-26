import { fetchAuthWatcher } from '@redux/slices/auth/login-saga';
import { all } from 'redux-saga/effects';
import { fetchRegistrationWatcher } from '@redux/slices/registration/registration-saga';
import { fetchCheckEmailWatcher } from '@redux/slices/check-email/check-email-saga';
import { fetchConfirmWatcher } from '@redux/slices/confirm/confirm-saga';
import { fetchChangePasswordWatcher } from '@redux/slices/change-password/change-password-saga';

export function* rootWatcher() {
    yield all([
        fetchRegistrationWatcher(),
        fetchAuthWatcher(),
        fetchCheckEmailWatcher(),
        fetchConfirmWatcher(),
        fetchChangePasswordWatcher(),
    ]);
}
