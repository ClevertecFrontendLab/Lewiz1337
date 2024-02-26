import { PATH } from '@constants/path';
import { Auth } from '@pages/auth-pages/auth/auth';
import { ChangePassword } from '@pages/auth-pages/change-password/change-password';
import { ConfirmEmail } from '@pages/auth-pages/confirm-email/confirm-email';
import { ErrorChangePassword } from '@pages/auth-pages/result-pages/error-change-password/error-change-password';
import { ErrorCheckEmailNoExist } from '@pages/auth-pages/result-pages/error-check-email-no-exist/error-check-email-no-exist';
import { ErrorCheckEmail } from '@pages/auth-pages/result-pages/error-check-email/error-check-email';
import { ErrorLogin } from '@pages/auth-pages/result-pages/error-login/error-login';
import { ErrorUserExist } from '@pages/auth-pages/result-pages/error-user-exist/error-user-exist';
import { Error } from '@pages/auth-pages/result-pages/error/error';
import { SuccessChangePassword } from '@pages/auth-pages/result-pages/success-change-password/success-change-password';
import { Success } from '@pages/auth-pages/result-pages/success/success';
import { MainPage } from '@pages/main-page';
import { Navigate, Route, Routes } from 'react-router-dom';

export const routes = (
    <Routes>
        <Route path='/' element={<Navigate to={PATH.auth} replace />} />
        <Route path={PATH.auth} element={<Auth />} />
        <Route path={PATH.registration} element={<Auth />} />
        <Route path={PATH.main} element={<MainPage />} />
        <Route path={PATH.success} element={<Success />} />
        <Route path={PATH.errorLogin} element={<ErrorLogin />} />
        <Route path={PATH.errorUserExist} element={<ErrorUserExist />} />
        <Route path={PATH.errorCheckEmailNoExist} element={<ErrorCheckEmailNoExist />} />
        <Route path={PATH.error} element={<Error />} />
        <Route path={PATH.errorCheckEmail} element={<ErrorCheckEmail />} />
        <Route path={PATH.confirmEmail} element={<ConfirmEmail />} />
        <Route path={PATH.changePassword} element={<ChangePassword />} />
        <Route path={PATH.errorChangePassword} element={<ErrorChangePassword />} />
        <Route path={PATH.successChangePassword} element={<SuccessChangePassword />} />
    </Routes>
);
