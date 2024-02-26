import { RequestCheckEmailValue } from '@redux/slices/check-email/check-email-slice';
import {
    FETCH_AUTH,
    FETCH_CHANGE_PASSWORD,
    FETCH_CHECK_EMAIL,
    FETCH_CONFIRM,
    FETCH_REGISTRATION,
} from './constants';
import { RequestConfirmValue } from '@redux/slices/confirm/confirm-slice';
import { ChangePasswordValue } from '@redux/slices/change-password/change-password-slice';

export const fetchAuth = (body: LoginFormValue) => ({ type: FETCH_AUTH, payload: body });
export const fetchRegistration = (body: LoginFormValue) => ({
    type: FETCH_REGISTRATION,
    payload: body,
});
export const fetchCheckEmail = (body: RequestCheckEmailValue) => ({
    type: FETCH_CHECK_EMAIL,
    payload: body,
});
export const fetchConfirm = (body: RequestConfirmValue) => ({
    type: FETCH_CONFIRM,
    payload: body,
});
export const fetchChangePassword = (body: ChangePasswordValue) => ({
    type: FETCH_CHANGE_PASSWORD,
    payload: body,
});
