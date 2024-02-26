import styles from './loader.module.less';
import Lottie from 'lottie-react';
import loader from '../../assets/loader.json';

export const Loader = () => {
    return (
        <div data-test-id='loader' className={styles.loader}>
            <div className={styles.svgWrapper}>
                <Lottie animationData={loader} loop />
            </div>
        </div>
    );
};
