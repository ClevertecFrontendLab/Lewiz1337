import { Form, Input } from 'antd';
import React from 'react';

export const ConfirmPasswordItem: React.FC<InputItemProps> = ({ name = 'confirm', DataTestId }) => {
    const [margin, setMargin] = React.useState<number>();

    const handleWindowResize = () => {
        const width = window.innerWidth;
        if (width < 580) {
            setMargin(36);
        } else {
            setMargin(46);
        }
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <Form.Item style={{ marginTop: margin }}>
            <Form.Item
                name={name}
                noStyle
                rules={[
                    {
                        required: true,
                        message: 'Пароли должны совпадать',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                        },
                    }),
                ]}
            >
                <Input.Password data-test-id={DataTestId} placeholder='Повторите пароль' />
            </Form.Item>
        </Form.Item>
    );
};
