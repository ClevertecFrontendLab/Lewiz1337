import { Card } from 'antd';
import React from 'react';
import styles from './action-card.module.less';
import classNames from 'classnames';

type ActionCardProps = {
    title?: React.ReactNode;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
};

export const ActionCard: React.FC<ActionCardProps> = (props) => {
    const cardClassName = classNames({
        [styles.root]: true,
        [`${props.className}`]: !!props.className,
    });
    return (
        <Card className={cardClassName} title={props.title}>
            {props.children}
        </Card>
    );
};

