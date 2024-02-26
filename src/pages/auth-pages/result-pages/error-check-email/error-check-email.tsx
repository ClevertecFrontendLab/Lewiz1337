import { AuthPageLayout } from '@components/auth-page-layout';
import { ResultCardTemplate } from '@components/result-card-template/result-card-template';
import Man from '@assets/Man.svg?react';
import styles from './error-check-email.module.less';
import { PATH } from '@constants/path';
import { useDispatch, useSelector } from 'react-redux';
import { clear } from '@redux/slices/check-email/check-email-slice';
import { history } from '@redux/configure-store';
import { loginState, routerState } from '@redux/selectors';
import { fetchCheckEmail } from '@redux/saga/actions';
import React from 'react';

export const ErrorCheckEmail = () => {
    const dispatch = useDispatch();
    const login = useSelector(loginState);
    const onClick = () => {
        dispatch(clear());
        history.push(PATH.auth);
        if (login.formValue?.email) {
            dispatch(fetchCheckEmail({ email: login.formValue.email }));
        }
    };

    const router = useSelector(routerState);

    React.useEffect(() => {
        if (router.action !== 'PUSH') {
            history.push(PATH.auth);
        }
    }, []);

    return (
        <AuthPageLayout className={{ content: styles.root }}>
            <ResultCardTemplate
                BtnDataTestId='check-back-button'
                title='Что-то пошло не так'
                subTitle='Произошла ошибка, попробуйте отправить форму ещё раз.'
                buttonText={'Назад'}
                onClick={onClick}
                icon={<Man />}
            />
        </AuthPageLayout>
    );
};
