import { AuthPageLayout } from '@components/auth-page-layout';
import Logo from '@assets/Logo.svg?react';
import styles from './auth.module.less';
import { Tabs } from 'antd';
import { PATH } from '@constants/path';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState, history } from '@redux/configure-store';
import { RegistrationForm } from './registration-form';
import { LoginForm } from './login-form';

export const Auth = () => {
    const location = useSelector((state: RootState) => state.router.location);

    return (
        <AuthPageLayout
            className={{
                layout: styles.layout,
                content: classNames({
                    [styles.content]: true,
                    [styles.registrationContent]: location?.pathname == PATH.registration,
                }),
            }}
        >
            <div className={styles.logoWrapper}>
                <Logo />
            </div>
            <div className={styles.formWrapper}>
                <Tabs
                    defaultActiveKey={location?.pathname}
                    className={styles.tabs}
                    onChange={(key) => history.push(key)}
                >
                    <Tabs.TabPane tab='Вход' key={PATH.auth}>
                        <LoginForm />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='Регистрация' key={PATH.registration}>
                        <RegistrationForm />
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </AuthPageLayout>
    );
};
