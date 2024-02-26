import { AuthPageLayout } from '@components/auth-page-layout';
import { ResultCardTemplate } from '@components/result-card-template/result-card-template';
import Warning from '@assets/warningIcon.svg?react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus } from '@redux/slices/auth/login-slice';
import { PATH } from '@constants/path';
import { routerState } from '@redux/selectors';
import React from 'react';
import { history } from '@redux/configure-store';

export const ErrorLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(setStatus('default'));
        navigate(PATH.auth);
    };

    const router = useSelector(routerState);

    React.useEffect(() => {
        if (router.action !== 'PUSH') {
            history.push(PATH.auth);
        }
    }, []);
    return (
        <AuthPageLayout>
            <ResultCardTemplate
                BtnDataTestId='login-retry-button'
                title='Вход не выполнен'
                subTitle='Что-то пошло не так. Попробуйте еще раз'
                buttonText={'Повторить'}
                onClick={onClick}
                icon={<Warning />}
            />
        </AuthPageLayout>
    );
};
