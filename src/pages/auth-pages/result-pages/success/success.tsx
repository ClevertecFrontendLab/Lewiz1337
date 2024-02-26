import { ResultCardTemplate } from '@components/result-card-template/result-card-template';
import SuccessIcon from '@assets/Success.svg?react';
import { AuthPageLayout } from '@components/auth-page-layout';
import { PATH } from '@constants/path';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clear } from '@redux/slices/registration/registration-slice';
import { routerState } from '@redux/selectors';
import React from 'react';
import { history } from '@redux/configure-store';

export const Success = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onClick = () => {
        dispatch(clear());
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
                BtnDataTestId='registration-enter-button'
                title='Регистрация успешна'
                onClick={onClick}
                subTitle='Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'
                buttonText={'Войти'}
                icon={<SuccessIcon />}
            />
        </AuthPageLayout>
    );
};
