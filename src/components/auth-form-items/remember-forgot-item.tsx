import { EMAIL_REGEXP } from '@constants/regexps';
import { fetchCheckEmail } from '@redux/saga/actions';
import { loginState } from '@redux/selectors';
import { RequestCheckEmailValue } from '@redux/slices/check-email/check-email-slice';
import { Checkbox, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

export const RememberForgotItem = () => {
    const login = useSelector(loginState);
    const dispatch = useDispatch();

    const onForgotBtnClick = () => {
        if (login.formValue && EMAIL_REGEXP.test(login.formValue?.email)) {
            const value: RequestCheckEmailValue = {
                email: login.formValue.email,
            };
            dispatch(fetchCheckEmail(value));
        }
    };

    return (
        <Form.Item style={{ marginTop: 54 }} noStyle>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 56 }}>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                    <Checkbox data-test-id='login-remember'>Запомнить меня</Checkbox>
                </Form.Item>
                <a
                    type='text'
                    className='login-form-forgot'
                    data-test-id='login-forgot-button'
                    onClick={onForgotBtnClick}
                >
                    Забыли пароль?
                </a>
            </div>
        </Form.Item>
    );
};
