import { AuthButtons } from '@components/auth-form-items/auth-buttons/auth-buttons';
import { AuthPasswordItem } from '@components/auth-form-items/auth-password-item';
import { EmailItem } from '@components/auth-form-items/email-item';
import { RememberForgotItem } from '@components/auth-form-items/remember-forgot-item';
import { PASSWORD_REG_REGEXP } from '@constants/regexps';
import { fetchAuth } from '@redux/saga/actions';
import { setValue } from '@redux/slices/auth/login-slice';
import { useDispatch } from 'react-redux';
import styles from './auth.module.less';
import Form, { useForm } from 'antd/lib/form/Form';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const onSubmit = (value: LoginFormValue) => {
        if (PASSWORD_REG_REGEXP.test(form.getFieldValue('password'))) {
            dispatch(fetchAuth(value));
        }
    };

    const [form] = useForm();
    const onFieldChange = () => {
        dispatch(
            setValue({
                email: form.getFieldValue('email'),
                password: form.getFieldValue('password'),
                remember: form.getFieldValue('remember'),
            }),
        );
    };

    return (
        <Form
            form={form}
            size='large'
            onFieldsChange={onFieldChange}
            onFinish={onSubmit}
            className={styles.form}
        >
            <EmailItem DataTestId='login-email' name='email' />
            <AuthPasswordItem DataTestId='login-password' name='password' />
            <RememberForgotItem />
            <AuthButtons />
        </Form>
    );
};
