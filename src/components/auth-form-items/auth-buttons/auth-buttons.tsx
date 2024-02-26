import { GooglePlusOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import styles from './auth-buttons.module.less';

export const AuthButtons = () => {
    return (
        <div className={styles.buttonBlock}>
            <Form.Item noStyle>
                <Button
                    className={styles.loginBtn}
                    data-test-id='login-submit-button'
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
                    Войти через Google
                </Button>
            </Form.Item>
        </div>
    );
};
