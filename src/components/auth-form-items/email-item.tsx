import { EMAIL_REGEXP } from '@constants/regexps';
import { Form, Input } from 'antd';
import React from 'react';



export const EmailItem: React.FC<InputItemProps> = ({ name = 'email', DataTestId }) => {
    return (
        <Form.Item
            name={name}
            rules={[
                {
                    pattern: EMAIL_REGEXP,
                    required: true,
                    message: '',
                },
            ]}
        >
            <Input data-test-id={DataTestId} addonBefore={'e-mail:'} />
        </Form.Item>
    );
};
