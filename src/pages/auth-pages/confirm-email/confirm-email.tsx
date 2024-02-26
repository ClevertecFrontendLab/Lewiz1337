import React from 'react';
import BlueWarning from '@assets/BlueWarning.svg?react';
import { AuthPageLayout } from '@components/auth-page-layout';
import VerificationInput from 'react-verification-input';
import { Typography } from 'antd';
import styles from './confirm-email.module.less';
import { confirmState, loginState } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { RequestConfirmValue, setStatus } from '@redux/slices/confirm/confirm-slice';
import { fetchConfirm } from '@redux/saga/actions';
import classNames from 'classnames';
import { PATH } from '@constants/path';
import { RootState, history } from '@redux/configure-store';

export const ConfirmEmail = () => {
    const dispatch = useDispatch();
    const login = useSelector(loginState);
    const confirm = useSelector(confirmState);
    const router = useSelector((state: RootState) => state.router);
    const [code, setCode] = React.useState<string>('');

    const onComplete = (value: string) => {
        const reqValue: RequestConfirmValue = {
            email: login.formValue?.email ?? '',
            code: value,
        };

        dispatch(fetchConfirm(reqValue));
    };

    const onChange = (v: string) => {
        setCode(v);
        dispatch(setStatus('default'));
    };

    React.useEffect(() => {
        if (confirm.status == 'error') {
            setCode('');
        }
    }, [confirm.status]);

    React.useEffect(() => {
        if (router.previousLocations) {
            if (router.previousLocations[1].location?.pathname != PATH.auth) {
                history.push(PATH.auth);
            }
        }
    }, []);

    return (
        <AuthPageLayout>
            <div className={styles.root}>
                <BlueWarning />
                <Typography.Title>
                    Введите код
                    <br /> для восстановления аккауанта
                </Typography.Title>
                <Typography.Text>
                    Мы отправили вам на e-mail <b>{login.formValue?.email}</b> шестизначный код.
                    Введите его в поле ниже.
                </Typography.Text>
                <div className={styles.inputWrapper}>
                    <VerificationInput
                        data-test-id='verification-input'
                        inputProps={{
                            'data-test-id': 'verification-input',
                        }}
                        onComplete={onComplete}
                        value={code}
                        onChange={onChange}
                        placeholder=''
                        classNames={{
                            container: styles.container,
                            character: classNames({
                                [styles.character]: true,
                                [styles.error]: confirm.status == 'error',
                            }),
                            characterInactive: styles.characterInactive,
                            characterSelected: styles.characterSelected,
                            characterFilled: styles.characterFilled,
                        }}
                    />
                </div>
                <Typography.Text className={styles.spamMessage}>
                    Не пришло письмо? Проверьте папку Спам.
                </Typography.Text>
            </div>
        </AuthPageLayout>
    );
};
