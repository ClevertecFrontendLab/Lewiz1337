import React from 'react';
import { Card, Typography } from 'antd';
import { CalendarOutlined, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import { possibilityDescText, secondDescText } from '@constants/texts';
import 'antd/dist/antd.css';

import styles from './main-page.module.less';
import { LinkButton } from '@components/link-button';
import { PageLayout } from '@components/page-layout';
import { ActionCard } from '@components/action-card';

const { Paragraph } = Typography;
export const MainPage: React.FC = () => {
    return (
        <PageLayout>
            <div className={styles.grid}>
                <Card className={styles.firstDescription}>
                    <Paragraph className={styles.blueText}>{possibilityDescText}</Paragraph>
                </Card>
                <Card className={styles.secondDescription}>
                    <Paragraph className={styles.descText}>{secondDescText}</Paragraph>
                </Card>
                <ActionCard className={styles.card1} title='Расписать тренировки'>
                    <LinkButton icon={<HeartFilled />} text='Тренировки' />
                </ActionCard>
                <ActionCard className={styles.card2} title='Назначить календарь'>
                    <LinkButton icon={<CalendarOutlined />} text='Календарь' />
                </ActionCard>
                <ActionCard className={styles.card3} title='Заполнить профиль'>
                    <LinkButton icon={<IdcardOutlined />} text='Профиль' />
                </ActionCard>
            </div>
        </PageLayout>
    );
};
