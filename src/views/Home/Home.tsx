import {
    BoxComponent,
    ButtonComponent,
    ProgressComponent,
    TypographyComponent,
} from 'lora-ds';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../store/slices/UI';
import type { RootState } from '../../store/store';
import homeStyles from './Home.module.css';

export default function Home() {
    const ui = useSelector((state: RootState) => state.ui);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [shouldError, setShouldError] = useState(false);

    useEffect(() => {
        const simulateLoading = async () => {
            dispatch(setLoading(true));
            await new Promise((resolve) => {
                let progress = 0;
                const interval = setInterval(() => {
                    progress += 10;
                    setLoadingProgress(progress);
                    if (progress >= 100) {
                        clearInterval(interval);
                        resolve(true);
                    }
                }, 200);
            });
            dispatch(setLoading(false));
        };
        simulateLoading();
    }, [dispatch]);

    if (shouldError) {
        throw new Error('Simulated error for testing Error Boundary');
    }
    return (
        <>
            <BoxComponent className={homeStyles.Home__Wrapper}>
                {ui.isLoading ? (
                    <ProgressComponent
                        label={t('home.loading')}
                        value={loadingProgress}
                        className={homeStyles.Home__Progress}
                    />
                ) : (
                    <>
                        <ButtonComponent onClick={() => setShouldError(true)}>
                            <TypographyComponent variant="body1">
                                Disparar erro
                            </TypographyComponent>
                        </ButtonComponent>
                    </>
                )}
            </BoxComponent>
        </>
    );
}
