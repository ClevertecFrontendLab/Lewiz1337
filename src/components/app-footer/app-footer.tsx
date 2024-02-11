import { Button } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import styles from './app-footer.module.less';
import { DownloadCard } from '@components/download-card';

export const AppFooter = () => {
    return (
        <Footer className={styles.root}>
            <Button className={styles.reviewButton} type='link'>
                Смотреть отзывы
            </Button>
            <DownloadCard />
        </Footer>
    );
};
