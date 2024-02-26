import { AuthPageLayout } from '@components/auth-page-layout';
import { ResultCardTemplate } from '@components/result-card-template/result-card-template';
import ErrorIcon from '@assets/Error.svg?react';

import { useDispatch, useSelector } from 'react-redux';
import { registrationState, routerState } from '@redux/selectors';
import { fetchRegistration } from '@redux/saga/actions';
import React from 'react';
import { history } from '@redux/configure-store';
import { PATH } from '@constants/path';

export const Error = () => {
    const dispatch = useDispatch();
    const registration = useSelector(registrationState);

    const onClick = () => {
        if (registration.formValue) {
            dispatch(fetchRegistration(registration.formValue));
        }
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
                BtnDataTestId='registration-retry-button'
                onClick={onClick}
                title='Данные не сохранились'
                subTitle='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
                buttonText={'Повторить'}
                icon={<ErrorIcon />}
            />
        </AuthPageLayout>
    );
};
