import {
    BoxComponent,
    LinkComponent,
    SelectComponent,
    SelectItemComponent,
    TypographyComponent,
} from 'lora-ds'
import { useTranslation } from 'react-i18next'
import BRFlag from '../../../assets/flags/br.svg?react'
import ESFlag from '../../../assets/flags/es.svg?react'
import USFlag from '../../../assets/flags/us.svg?react'
import UflowLogo from '../../../assets/uFlow.svg?react'
import useLanguageSwitch, {
    type Locale,
} from '../../../hooks/useLanguageSwitch'
import NavbarStyles from './Navbar.module.css'
const Navbar = () => {
    const { t } = useTranslation()
    const { switchLanguage, locale } = useLanguageSwitch()

    const handleSwitchLanguage = (locale: Locale) => {
        switchLanguage(locale as Locale)
    }

    return (
        <BoxComponent className={NavbarStyles.Navbar__Wrapper}>
            <BoxComponent className={NavbarStyles.Navbar__Logo__Wrapper}>
                <UflowLogo className={NavbarStyles.Navbar__Logo__Image} />
                <TypographyComponent
                    className={NavbarStyles.Navbar__Logo__Text}
                >
                    uFlow
                </TypographyComponent>
            </BoxComponent>
            <LinkComponent
                href="#home"
                className={NavbarStyles.Navbar__MenuItem}
            >
                {t('landing.navbar.home')}
            </LinkComponent>
            <LinkComponent
                href="#features"
                className={NavbarStyles.Navbar__MenuItem}
            >
                {t('landing.navbar.features')}
            </LinkComponent>
            <LinkComponent
                href="#pricing"
                className={NavbarStyles.Navbar__MenuItem}
            >
                {t('landing.navbar.pricing')}
            </LinkComponent>
            <LinkComponent
                href="#about"
                className={NavbarStyles.Navbar__MenuItem}
            >
                {t('landing.navbar.about')}
            </LinkComponent>
            <LinkComponent
                href="#contact"
                className={NavbarStyles.Navbar__MenuItem}
            >
                {t('landing.navbar.contact')}
            </LinkComponent>
            <BoxComponent
                className={NavbarStyles.Navbar__LanguageSelector__Wrapper}
            >
                <SelectComponent
                    className={NavbarStyles.Navbar__LanguageSelector__Item}
                    defaultValue={locale}
                >
                    <SelectItemComponent
                        id="en-US"
                        onClick={() => handleSwitchLanguage('en-US')}
                    >
                        <USFlag
                            width={20}
                            height={15}
                            style={{ marginRight: '8px' }}
                        />
                        <TypographyComponent>English</TypographyComponent>
                    </SelectItemComponent>
                    <SelectItemComponent
                        id="es-ES"
                        onClick={() => handleSwitchLanguage('es-ES')}
                    >
                        <ESFlag
                            width={20}
                            height={15}
                            style={{ marginRight: '8px' }}
                        />
                        <TypographyComponent>Español</TypographyComponent>
                    </SelectItemComponent>
                    <SelectItemComponent
                        id="pt-BR"
                        onClick={() => handleSwitchLanguage('pt-BR')}
                    >
                        <BRFlag
                            width={20}
                            height={15}
                            style={{ marginRight: '8px' }}
                        />
                        <TypographyComponent>Português</TypographyComponent>
                    </SelectItemComponent>
                </SelectComponent>
            </BoxComponent>
        </BoxComponent>
    )
}

export default Navbar
