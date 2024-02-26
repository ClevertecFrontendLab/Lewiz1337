import { AuthPageLayout } from '@components/auth-page-layout';
import { ResultCardTemplate } from '@components/result-card-template/result-card-template';
import Error from '@assets/Error.svg?react';
import styles from './error-change-password.module.less';
import { useDispatch, useSelector } from 'react-redux';

import { fetchChangePassword } from '@redux/saga/actions';
import { changePasswordState, routerState } from '@redux/selectors';
import { PATH } from '@constants/path';
import React from 'react';
import { history } from '@redux/configure-store';

export const ErrorChangePassword = () => {
    const changePassword = useSelector(changePasswordState);
    const dispatch = useDispatch();

    const onClick = () => {
        if (changePassword.value) {
            dispatch(fetchChangePassword(changePassword.value));
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
                BtnDataTestId='change-retry-button'
                title='Данные не сохранились'
                subTitle='Что-то пошло не так. Попробуйте еще раз'
                buttonText={'Повторить'}
                onClick={onClick}
                icon={<Error />}
            />
        </AuthPageLayout>
    );
};
