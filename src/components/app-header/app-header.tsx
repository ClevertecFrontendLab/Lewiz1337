import styles from './app-header.module.less';
import { Breadcrumb, Typography } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { SettingOutlined } from '@ant-design/icons';
import { LinkButton } from '@components/link-button';

export const AppHeader = () => {
    return (
        <Header className={styles.root}>
            <Breadcrumb>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.titleWrap}>
                <Typography.Title>
                    Приветствуем тебя в CleverFit — приложении,
                    <br /> которое поможет тебе добиться своей мечты!
                </Typography.Title>
                <LinkButton
                    className={styles.settingsButton}
                    icon={<SettingOutlined />}
                    text='Настройки'
                />
            </div>
        </Header>
    );
};
