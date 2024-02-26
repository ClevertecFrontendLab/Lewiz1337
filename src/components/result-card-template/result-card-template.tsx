
import { Typography, Button } from 'antd';
import React from 'react';
import styles from './result-card-template.module.less';
import classNames from 'classnames';

type ResultCardTemplateProps = {
    title: string;
    subTitle: string;
    buttonText: string;
    onClick?: () => void;
    icon: string | React.ReactNode;
    className?: string;
    BtnDataTestId?: string;
};

export const ResultCardTemplate: React.FC<ResultCardTemplateProps> = (props) => {
    return (
        <div
            className={classNames({
                [styles.root]: true,
                [`${props.className}`]: !!props.className,
            })}
        >
            {props.icon}
            <Typography.Title>{props.title}</Typography.Title>
            <Typography.Text>{props.subTitle}</Typography.Text>
            <Button data-test-id={props.BtnDataTestId} type='primary' onClick={props.onClick}>
                {props.buttonText}
            </Button>
        </div>
    );
};
