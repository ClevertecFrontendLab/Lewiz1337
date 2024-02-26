import { PASSWORD_REG_REGEXP } from '@constants/regexps';
import { Form, Input } from 'antd';
import React from 'react';

type RegistrationPasswordItemProps = InputItemProps & {
    placeholder?: string;
};

export const RegistrationPasswordItem: React.FC<RegistrationPasswordItemProps> = ({
    placeholder = 'Пароль',
    DataTestId,
    name = 'password',
}) => {
    return (
        <Form.Item
            style={{ marginTop: 32 }}
            help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
        >
            <Form.Item
                name={name}
                noStyle
                rules={[
                    {
                        required: true,
                        pattern: PASSWORD_REG_REGEXP,
                    },
                ]}
            >
                <Input.Password data-test-id={DataTestId} placeholder={placeholder} />
            </Form.Item>
        </Form.Item>
    );
};
