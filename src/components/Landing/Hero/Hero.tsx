import { BoxComponent, ButtonComponent, TypographyComponent } from 'lora-ds'
import { useTranslation } from 'react-i18next'
import CalendarIcon from '../../../assets/icons/calendar.svg?react'
import ClockIcon from '../../../assets/icons/clock.svg?react'
import GraphUpIcon from '../../../assets/icons/graph_up.svg?react'
import LinkIcon from '../../../assets/icons/L-Link.svg?react'
import FloatingIcon from '../FloatingIcon/FloatingIcon'
import HeroStyles from './Hero.module.css'

const Hero = () => {
    const { t } = useTranslation()

    return (
        <BoxComponent className={HeroStyles.Hero__Wrapper}>
            <BoxComponent className={HeroStyles.Hero__Content}>
                <TypographyComponent
                    variant="h1"
                    className={HeroStyles.Hero__Title}
                >
                    {t('landing.hero.title')}
                </TypographyComponent>
                <TypographyComponent
                    variant="body1"
                    className={HeroStyles.Hero__Subtitle}
                >
                    {t('landing.hero.description')}
                </TypographyComponent>
            </BoxComponent>

            <BoxComponent className={HeroStyles.Hero__IconsContainer}>
                <FloatingIcon
                    icon={<CalendarIcon />}
                    position={{ left: '5%', top: '15%' }}
                    size="70px"
                    variant="primary"
                    animationDelay={1}
                />
                <FloatingIcon
                    icon={<ClockIcon />}
                    position={{ left: '8%', bottom: '15%' }}
                    size="70px"
                    variant="secondary"
                    animationDelay={2}
                />
                <FloatingIcon
                    icon={<GraphUpIcon />}
                    position={{ right: '8%', top: '20%' }}
                    size="70px"
                    variant="primary"
                    animationDelay={3}
                />
                <FloatingIcon
                    icon={<LinkIcon />}
                    position={{ right: '10%', bottom: '20%' }}
                    size="70px"
                    variant="secondary"
                    animationDelay={4}
                />
            </BoxComponent>
            <BoxComponent className={HeroStyles.Hero__ButtonsContainer}>
                <ButtonComponent
                    className={HeroStyles.Hero__Button}
                    variant="secondary"
                >
                    {t('shared.learnMore')}
                </ButtonComponent>
                <ButtonComponent
                    className={HeroStyles.Hero__Button}
                    variant="primary"
                >
                    {t('shared.getStarted')}
                </ButtonComponent>
            </BoxComponent>
        </BoxComponent>
    )
}

export default Hero
