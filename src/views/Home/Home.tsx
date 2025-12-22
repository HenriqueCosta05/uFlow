import { BoxComponent, ButtonComponent, TypographyComponent } from 'lora-ds'
import { useTheme } from '../../hooks'

export default function Home() {
    const { theme, toggleMode } = useTheme()

    return (
        <BoxComponent className="Home__Wrapper">
            <TypographyComponent variant="h1">
                Welcome to uFlow Home!
            </TypographyComponent>
            {theme && (
                <TypographyComponent variant="body1">
                    Current Theme: {theme.current}
                </TypographyComponent>
            )}
            <ButtonComponent variant="primary" onClick={() => toggleMode()}>
                Click Me
            </ButtonComponent>
        </BoxComponent>
    )
}
