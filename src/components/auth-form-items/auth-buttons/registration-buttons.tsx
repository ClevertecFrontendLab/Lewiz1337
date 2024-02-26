import { GooglePlusOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import styles from './auth-buttons.module.less';
import classNames from 'classnames';

export const RegistrationButtons = () => {
    return (
        <div className={classNames({ [styles.buttonBlock]: true, [styles.registerButton]: true })}>
            <Form.Item noStyle>
                <Button
                    className={styles.loginBtn}
                    data-test-id='registration-submit-button'
                    type='primary'
                    htmlType='submit'
                >
                    Войти
                </Button>
            </Form.Item>
            <Form.Item noStyle>
                <Button
                    className={styles.googleBtn}
                    htmlType='submit'
                    icon={<GooglePlusOutlined />}
                >
                    Регистрация через Google
                </Button>
            </Form.Item>
        </div>
    );
};
