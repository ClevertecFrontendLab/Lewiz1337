import { AuthPageLayout } from '@components/auth-page-layout';
import { Button, Form, Typography } from 'antd';
import styles from './change-password.module.less';
import { RegistrationPasswordItem } from '@components/auth-form-items/registration-password-item';
import { ConfirmPasswordItem } from '@components/auth-form-items/confirm-password-item';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChangePassword } from '@redux/saga/actions';
import { PATH } from '@constants/path';
import React from 'react';
import { routerState } from '@redux/selectors';
import { history } from '@redux/configure-store';

type ChangePasswordFormType = {
    password: string;
    confirmPassword: string;
};

export const ChangePassword = () => {
    const router = useSelector(routerState);
    const onSubmit = (v: ChangePasswordFormType) => {
        dispatch(fetchChangePassword(v));
    };

    React.useEffect(() => {
        if (router.action !== 'PUSH') {
            history.push(PATH.auth);
        }
    }, []);

    const dispatch = useDispatch();
    return (
        <AuthPageLayout>
            <div className={styles.root}>
                <Typography.Title>Восстановление аккауанта</Typography.Title>
                <Form
                    style={{ marginTop: 24 }}
                    onFinish={onSubmit}
                    size='large'
                    className={styles.form}
                >
                    <RegistrationPasswordItem
                        placeholder='Новый пароль'
                        DataTestId='change-password'
                    />
                    <ConfirmPasswordItem
                        DataTestId='change-confirm-password'
                        name='confirmPassword'
                    />
                    <Form.Item noStyle>
                        <Button
                            data-test-id='change-submit-button'
                            type='primary'
                            htmlType='submit'
                        >
                            Сохранить
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </AuthPageLayout>
    );
};
