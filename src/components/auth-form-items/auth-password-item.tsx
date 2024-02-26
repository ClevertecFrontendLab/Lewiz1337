import { Form, Input } from 'antd';
import React from 'react';

export const AuthPasswordItem: React.FC<InputItemProps> = ({ name = 'password', DataTestId }) => {
    return (
        <Form.Item style={{ marginTop: 32 }}>
            <Form.Item
                name={name}
                noStyle
                rules={[
                    {
                        required: true,
                        message: '',
                    },
                ]}
            >
                <Input.Password data-test-id={DataTestId} placeholder='Пароль' />
            </Form.Item>
        </Form.Item>
    );
};
