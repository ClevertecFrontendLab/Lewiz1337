import { AuthPageLayout } from '@components/auth-page-layout';
import { ResultCardTemplate } from '@components/result-card-template/result-card-template';
import Error from '@assets/Error.svg?react';
import styles from './error-check-email-no-exist.module.less';
import { PATH } from '@constants/path';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clear } from '@redux/slices/check-email/check-email-slice';
import { routerState } from '@redux/selectors';
import React from 'react';
import { history } from '@redux/configure-store';

export const ErrorCheckEmailNoExist = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onClick = () => {
        navigate(PATH.auth);
        dispatch(clear());
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
                BtnDataTestId='check-retry-button'
                title='Такой e-mail не зарегистрирован'
                subTitle='Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.'
                buttonText={'Попробовать снова'}
                onClick={onClick}
                icon={<Error />}
            />
        </AuthPageLayout>
    );
};
