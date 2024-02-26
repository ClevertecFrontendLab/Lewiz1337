import SuccessIcon from '@assets/Success.svg?react';
import { AuthPageLayout } from '@components/auth-page-layout';
import { ResultCardTemplate } from '@components/result-card-template/result-card-template';
import styles from './success-change-password.module.less';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@constants/path';
import { routerState } from '@redux/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { history } from '@redux/configure-store';

export const SuccessChangePassword = () => {
    const onClick = () => {
        navigate(PATH.auth);
    };
    const navigate = useNavigate();
    const router = useSelector(routerState);

    React.useEffect(() => {
        if (router.action !== 'PUSH') {
            history.push(PATH.auth);
        }
    }, []);
    return (
        <AuthPageLayout className={{ content: styles.root }}>
            <ResultCardTemplate
                BtnDataTestId='change-entry-button'
                title='Пароль успешно изменен'
                subTitle='Теперь можно войти в аккаунт, используя свой логин и новый пароль'
                buttonText={'Вход'}
                onClick={onClick}
                icon={<SuccessIcon />}
            />
        </AuthPageLayout>
    );
};
