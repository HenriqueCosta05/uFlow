import {
    BoxComponent,
    ButtonComponent,
    LinkComponent,
    SelectComponent,
    SelectItemComponent,
    TypographyComponent,
} from 'lora-ds'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import BRFlag from '../../../assets/flags/br.svg?react'
import ESFlag from '../../../assets/flags/es.svg?react'
import USFlag from '../../../assets/flags/us.svg?react'
import MenuIcon from '../../../assets/icons/menu.svg?react'
import UflowLogo from '../../../assets/uFlow.svg?react'
import useLanguageSwitch, { type Locale } from '../../hooks/useLanguageSwitch'
import NavbarStyles from './Navbar.module.css'

const Navbar = () => {
    const { t } = useTranslation()
    const { switchLanguage, locale } = useLanguageSwitch()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleSwitchLanguage = (locale: Locale) => {
        switchLanguage(locale as Locale)
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
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

            <ButtonComponent
                onClick={toggleMobileMenu}
                className={NavbarStyles.Navbar__MobileMenuToggle}
            >
                <MenuIcon />
            </ButtonComponent>

            <BoxComponent
                className={`${NavbarStyles.Navbar__Menu} ${isMobileMenuOpen ? NavbarStyles['Navbar__Menu--open'] : ''}`}
            >
                <LinkComponent
                    href="#features"
                    className={NavbarStyles.Navbar__MenuItem}
                    onClick={closeMobileMenu}
                >
                    {t('landing.navbar.features')}
                </LinkComponent>
                <LinkComponent
                    href="/integrations"
                    className={NavbarStyles.Navbar__MenuItem}
                    onClick={closeMobileMenu}
                >
                    {t('landing.navbar.integrations')}
                </LinkComponent>

                <ButtonComponent
                    variant="secondary"
                    className={NavbarStyles.Navbar__Login__Button}
                >
                    {t('shared.getStarted')}
                </ButtonComponent>

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
        </BoxComponent>
    )
}

export default Navbar
