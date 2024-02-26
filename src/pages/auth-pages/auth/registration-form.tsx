import { RegistrationButtons } from '@components/auth-form-items/auth-buttons/registration-buttons';
import { ConfirmPasswordItem } from '@components/auth-form-items/confirm-password-item';
import { EmailItem } from '@components/auth-form-items/email-item';
import { RegistrationPasswordItem } from '@components/auth-form-items/registration-password-item';
import { PASSWORD_REG_REGEXP } from '@constants/regexps';
import { fetchRegistration } from '@redux/saga/actions';
import { useDispatch } from 'react-redux';
import styles from './auth.module.less';
import { Form } from 'antd';

type RegistrationFormType = {
    email: string;
    password: string;
    confirm: string;
};

export const RegistrationForm = () => {
    const dispatch = useDispatch();

    const onSubmit = (value: RegistrationFormType) => {
        const data = {
            email: value.email,
            password: value.password,
        };
        console.log(PASSWORD_REG_REGEXP.test(value.password));
        dispatch(fetchRegistration(data));
    };

    return (
        <Form onFinish={onSubmit} size='large' className={styles.form}>
            <EmailItem DataTestId='registration-email' name='email' />
            <RegistrationPasswordItem DataTestId='registration-password' />
            <ConfirmPasswordItem DataTestId='registration-confirm-password' />
            <RegistrationButtons />
        </Form>
    );
};
