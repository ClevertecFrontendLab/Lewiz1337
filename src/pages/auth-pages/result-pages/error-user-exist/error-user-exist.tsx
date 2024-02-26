import { AuthPageLayout } from '@components/auth-page-layout';
import { ResultCardTemplate } from '@components/result-card-template/result-card-template';
import Error from '@assets/Error.svg?react';
import { useDispatch, useSelector } from 'react-redux';
import { clear } from '@redux/slices/registration/registration-slice';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@constants/path';
import { routerState } from '@redux/selectors';
import React from 'react';
import { history } from '@redux/configure-store';

export const ErrorUserExist = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onClick = () => {
        dispatch(clear());
        navigate(PATH.registration);
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
                BtnDataTestId='registration-back-button'
                onClick={onClick}
                title='Данные не сохранились'
                subTitle='Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.'
                buttonText={'Назад к регистрации'}
                icon={<Error />}
            />
        </AuthPageLayout>
    );
};
