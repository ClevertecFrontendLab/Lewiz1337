import React from 'react';
import Icon, {
    HeartFilled,
    TrophyFilled,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    CalendarTwoTone,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import classNames from 'classnames';
import Exit from '@assets/Exit.svg?react';
import FitText from '@assets/Fit.svg?react';
import Logo from '@assets/Logo.svg?react';
import IdCard from '@assets/IdCard.svg?react';
import styles from './sidebar.module.less';

const mobileBreackpoint = 764;

export const Sidebar = () => {
    const [collapsed, setCollapsed] = React.useState<boolean>(false);
    const [siderWidth, setSiderWidth] = React.useState<number>();

    const handleWindowResize = () => {
        const width = window.innerWidth;
        if (width < mobileBreackpoint) {
            setSiderWidth(106);
        } else {
            setSiderWidth(208);
        }
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
        if (window.innerWidth < mobileBreackpoint) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
        }
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <Sider
            className={classNames({ [styles.sider]: true, [styles.collapsedSider]: collapsed })}
            trigger={null}
            collapsible
            width={siderWidth}
            collapsedWidth={64}
            collapsed={collapsed}
        >
            <div
                className={classNames({
                    [styles.logoWrapper]: true,
                    [styles.logoWrapperCollapsed]: collapsed,
                })}
            >
                {collapsed ? <FitText /> : <Logo />}
            </div>
            <Menu
                className={classNames({ [styles.navigation]: true, [styles.collapsed]: collapsed })}
            >
                <Menu.Item itemType='button' icon={<CalendarTwoTone />}>
                    Календарь
                </Menu.Item>
                <Menu.Item itemType='button' icon={<HeartFilled />}>
                    Тренировки
                </Menu.Item>
                <Menu.Item itemType='button' icon={<TrophyFilled />}>
                    Достижения
                </Menu.Item>
                <Menu.Item
                    itemType='button'
                    icon={
                        <Icon>
                            <IdCard />
                        </Icon>
                    }
                >
                    Профиль
                </Menu.Item>
            </Menu>
            <SiderTrigger collapsed={collapsed} setCollapsed={setCollapsed} />
            <Button
                className={classNames({ [styles.exitButton]: true, [styles.collapsed]: collapsed })}
                icon={<Exit />}
                type='default'
            >
                Выход
            </Button>
        </Sider>
    );
};

type SiderTriggerProps = {
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const SiderTrigger: React.FC<SiderTriggerProps> = ({ collapsed, setCollapsed }) => {
    return (
        <div
            data-test-id='sider-switch'
            onClick={() => {
                setCollapsed(!collapsed);
            }}
            className={styles.menuTrigger}
        >
            <div data-test-id='sider-switch-mobile'>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
        </div>
    );
};
