import axios, { AxiosError, AxiosResponse } from 'axios';
import { apiPath, apibase } from './apibase';
import { SuccessLoginResponce } from '@redux/slices/auth/login-slice';

import {
    CheckEmailSuccessResponce,
    RequestCheckEmailValue,
} from '@redux/slices/check-email/check-email-slice';
import { ConfirmSuccessResponce, RequestConfirmValue } from '@redux/slices/confirm/confirm-slice';
import {
    ChangePasswordResponce,
    ChangePasswordValue,
} from '@redux/slices/change-password/change-password-slice';

const fetchAuth = async (body: LoginFormValue) => {
    try {
        const res: AxiosResponse<SuccessLoginResponce> = await axios.post(
            apibase + apiPath.auth.login,
            { email: body.email, password: body.password },
        );
        return res;
    } catch (error) {
        const axiosError = error as AxiosError<RejectResponce>;
        throw axiosError;
    }
};

const fetchRegistration = async (body: LoginFormValue) => {
    try {
        const res: AxiosResponse = await axios.post(apibase + apiPath.auth.registration, {
            email: body.email,
            password: body.password,
        });
        return res;
    } catch (error) {
        const axiosError = error as AxiosError<RejectResponce>;
        throw axiosError;
    }
};

const fetchCheckEmail = async (body: RequestCheckEmailValue) => {
    try {
        const res: AxiosResponse<CheckEmailSuccessResponce> = await axios.post(
            apibase + apiPath.auth.checkEmail,
            body,
        );
        return res;
    } catch (error) {
        const axiosError = error as AxiosError<RejectResponce>;
        throw axiosError;
    }
};

const fetchConfirmEmail = async (body: RequestConfirmValue) => {
    try {
        const res: AxiosResponse<ConfirmSuccessResponce> = await axios.post(
            apibase + apiPath.auth.confirmEmail,
            body,
            {
                withCredentials: true,
            },
        );
        return res;
    } catch (error) {
        const axiosError = error as AxiosError<RejectResponce>;
        throw axiosError;
    }
};

const fetchChangePassword = async (body: ChangePasswordValue) => {
    try {
        const res: AxiosResponse<ChangePasswordResponce> = await axios.post(
            apibase + apiPath.auth.changePassword,
            body,
            {
                withCredentials: true,
            },
        );
        return res;
    } catch (error) {
        const axiosError = error as AxiosError<RejectResponce>;
        throw axiosError;
    }
};


export const API = {
  fetchAuth,
  fetchRegistration,
  fetchCheckEmail,
  fetchConfirmEmail,
  fetchChangePassword,
}