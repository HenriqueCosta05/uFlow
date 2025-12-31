import { BoxComponent, ButtonComponent, TypographyComponent } from 'lora-ds'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import ServerError from '../../assets/errors/NotFound.svg?react'
import ErrorBoundaryStyles from './NotFound.module.css'

interface InternalServerErrorProps {
    onRetry?: () => void
    errorMessage: string
}
export const NotFoundUI = (Props: InternalServerErrorProps) => {
    const { onRetry, errorMessage } = Props
    const { t } = useTranslation()
    const navigate = useNavigate()
    return (
        <BoxComponent className={ErrorBoundaryStyles.ErrorBoundary__Wrapper}>
            <BoxComponent
                className={ErrorBoundaryStyles.ErrorBoundary__Illustration}
            >
                <ServerError />
            </BoxComponent>
            <BoxComponent
                className={ErrorBoundaryStyles.ErrorBoundary__Content}
            >
                <TypographyComponent
                    variant="h4"
                    className={ErrorBoundaryStyles.ErrorBoundary__Title}
                >
                    {t('errors.404.title', 'Something went wrong')}
                </TypographyComponent>
                <TypographyComponent
                    variant="body1"
                    className={ErrorBoundaryStyles.ErrorBoundary__Message}
                >
                    {t(
                        'errors.404.message',
                        'An unexpected error has occurred. Please try refreshing the page or contact support if the problem persists.'
                    )}
                </TypographyComponent>
                {errorMessage && (
                    <code
                        className={ErrorBoundaryStyles.ErrorBoundary__Details}
                    >
                        {errorMessage}
                    </code>
                )}
                <BoxComponent
                    className={ErrorBoundaryStyles.ErrorBoundary__Actions}
                >
                    {onRetry && (
                        <ButtonComponent
                            className={
                                ErrorBoundaryStyles.ErrorBoundary__RetryButton
                            }
                            onClick={onRetry}
                            variant="secondary"
                        >
                            {t('errors.404.retry', 'Retry')}
                        </ButtonComponent>
                    )}
                    <ButtonComponent
                        className={
                            ErrorBoundaryStyles.ErrorBoundary__ContactSupportButton
                        }
                        variant="secondary"
                    >
                        {t('errors.404.contactSupport', 'Contact Support')}
                    </ButtonComponent>
                    <ButtonComponent
                        className={
                            ErrorBoundaryStyles.ErrorBoundary__HomeButton
                        }
                        variant="secondary"
                        onClick={() => navigate('/')}
                    >
                        {t('errors.404.goHome', 'Go to Homepage')}
                    </ButtonComponent>
                </BoxComponent>
                <BoxComponent
                    className={
                        ErrorBoundaryStyles.ErrorBoundary__DetailsWrapper
                    }
                >
                    <TypographyComponent
                        variant="body2"
                        className={
                            ErrorBoundaryStyles.ErrorBoundary__DetailsText
                        }
                    >
                        {t(
                            'errors.500.details',
                            'If the issue continues, please reach out to support for assistance.'
                        )}
                    </TypographyComponent>
                </BoxComponent>
            </BoxComponent>
        </BoxComponent>
    )
}

export default NotFoundUI
