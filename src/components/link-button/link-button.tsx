import { Button, Typography } from 'antd';
import classNames from 'classnames';
import React from 'react';
import styles from './link-button.module.less';
type LinkButtonType = {
    icon?: React.ReactNode;
    collapsed?: boolean;
    text?: string;
    type?: 'text' | 'link' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
    className?: string;
};

export const LinkButton: React.FC<LinkButtonType> = (props) => {
    const { icon, collapsed, text, type = 'link' } = props;
    const btnClassName = classNames({
        [styles.root]: true,
        [`${props.className}`]: !!props.className,
        [styles.collapsed]: collapsed,
    });
    return (
        <Button icon={icon} size='large' type={type} className={btnClassName}>
            <Typography.Text hidden={collapsed}>{text}</Typography.Text>
        </Button>
    );
};


