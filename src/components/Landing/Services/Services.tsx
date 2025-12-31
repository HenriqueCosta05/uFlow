import { BoxComponent, TypographyComponent } from 'lora-ds'
import { useTranslation } from 'react-i18next'
import ServicesStyles from './Services.module.css'

const Services = () => {
    const { t } = useTranslation()

    const servicesList = t('landing.services.list', {
        returnObjects: true,
    })
    return (
        <BoxComponent
            className={ServicesStyles.Services__Wrapper}
            id="features"
        >
            <BoxComponent className={ServicesStyles.Services__Header}>
                <TypographyComponent
                    variant="body1"
                    className={ServicesStyles.Services__Subtitle}
                >
                    {t('landing.services.subtitle')}
                </TypographyComponent>
                <TypographyComponent
                    variant="h2"
                    className={ServicesStyles.Services__Title}
                >
                    {t('landing.services.title')}
                </TypographyComponent>
                <TypographyComponent
                    variant="body1"
                    className={ServicesStyles.Services__Description}
                >
                    {t('landing.services.description')}
                </TypographyComponent>
            </BoxComponent>

            <BoxComponent className={ServicesStyles.Services__Content}>
                <BoxComponent className={ServicesStyles.Services__List}>
                    {servicesList &&
                        typeof servicesList === 'object' &&
                        Object.values(servicesList).map(
                            (
                                service: { title: string; description: string },
                                index
                            ) => (
                                <BoxComponent
                                    key={index}
                                    className={ServicesStyles.Services__Item}
                                >
                                    <TypographyComponent
                                        variant="h3"
                                        className={
                                            ServicesStyles.Services__ItemTitle
                                        }
                                    >
                                        {service.title}
                                    </TypographyComponent>
                                    <TypographyComponent
                                        variant="body1"
                                        className={
                                            ServicesStyles.Services__ItemDescription
                                        }
                                    >
                                        {service.description}
                                    </TypographyComponent>
                                </BoxComponent>
                            )
                        )}
                </BoxComponent>
            </BoxComponent>
        </BoxComponent>
    )
}

export default Services
