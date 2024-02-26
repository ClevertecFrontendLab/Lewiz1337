import React from 'react';
import styles from './auth-page-layout.module.less';
import { Content } from 'antd/lib/layout/layout';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@constants/path';
import { Loader } from '@components/loader/loader';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/configure-store';

type AuthPageLayout = {
    children?: React.ReactNode;
    className?: {
        layout?: string;
        content?: string;
    };
};

export const AuthPageLayout: React.FC<AuthPageLayout> = (props) => {
    const classNameLayout = classNames({
        [styles.root]: true,
        [`${props.className?.layout}`]: !!props.className?.content,
    });

    const classNameContent = classNames({
        [styles.card]: true,
        [`${props.className?.content}`]: !!props.className?.content,
    });

    const navigate = useNavigate();
    const selector = useSelector((state: RootState) => state);
    const isLoading =
        selector.login.status == 'loading' ||
        selector.registration.status == 'loading' ||
        selector.checkEmail.status == 'loading' ||
        selector.confirm.status == 'loading' ||
        selector.changePassword.status == 'loading';

    React.useEffect(() => {
        if (localStorage.getItem('jwtToken') || sessionStorage.getItem('jwtToken')) {
            navigate(PATH.main);
        }
    }, [navigate]);

    return (
        <div className={classNameLayout}>
            {isLoading && <Loader />}
            <div className={styles.blur} />
            <Content className={classNameContent}>{props.children}</Content>
        </div>
    );
};
