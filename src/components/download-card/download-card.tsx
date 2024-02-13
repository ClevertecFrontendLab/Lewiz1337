import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { Typography } from 'antd';

import styles from './download-card.module.less';
import { LinkButton } from '@components/link-button';
import { ActionCard } from '@components/action-card';

export const DownloadCard = () => {
    return (
        <ActionCard className={styles.root} title={<DowloadCardTitle />}>
            <LinkButton className={styles.button} icon={<AndroidFilled />} text='Android OS' />
            <LinkButton className={styles.button} icon={<AppleFilled />} text='Apple iOS' />
        </ActionCard>
    );
};

const DowloadCardTitle = () => (
    <>
        <Typography.Paragraph className={styles.downloadText}>
            Скачать на телефон
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.availableText}>
            Доступно в PRO-тарифе
        </Typography.Paragraph>
    </>
);
