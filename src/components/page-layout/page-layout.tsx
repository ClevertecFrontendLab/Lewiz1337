import React from 'react';
import { Layout } from 'antd';
import classNames from 'classnames';

import styles from './page-layout.module.less';
import { Sidebar } from '@components/sidebar';
import { AppHeader } from '@components/app-header';
import { AppFooter } from '@components/app-footer';

interface PageLayoutProps {
    children?: ReactChild;
}

const { Content } = Layout;
export const PageLayout: React.FC<PageLayoutProps> = (props) => {
    return (
        <Layout hasSider={true} className={styles.root}>
            <Sidebar />
            <Layout className={classNames({ 'main-wrapper': true, [styles.mainWrapper]: true })}>
                <AppHeader />
                <Layout className={styles.ContentWrapper}>
                    <Content className={styles.content}>{props.children}</Content>
                    <AppFooter />
                </Layout>
            </Layout>
        </Layout>
    );
};
