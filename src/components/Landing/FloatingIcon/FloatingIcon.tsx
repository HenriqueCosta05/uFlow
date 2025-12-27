import { BoxComponent } from 'lora-ds'
import FloatingIconStyles from './FloatingIcon.module.css'

interface FloatingIconProps {
    icon: React.ReactNode
    position?: {
        top?: string
        bottom?: string
        left?: string
        right?: string
    }
    size?: string
    variant?: 'primary' | 'secondary'
    animationDelay?: 1 | 2 | 3 | 4 | 5
}

const FloatingIcon = ({
    icon,
    position,
    size,
    variant = 'primary',
    animationDelay = 1,
}: FloatingIconProps) => {
    const animationClass =
        FloatingIconStyles[`FloatingIcon__Wrapper--animate${animationDelay}`]

    return (
        <BoxComponent
            className={`${FloatingIconStyles.FloatingIcon__Wrapper} ${animationClass}`}
            style={{
                width: size || '60px',
                height: size || '60px',
                top: position?.top,
                bottom: position?.bottom,
                left: position?.left,
                right: position?.right,
            }}
        >
            <BoxComponent
                className={
                    variant === 'primary'
                        ? FloatingIconStyles.FloatingIcon__Primary
                        : FloatingIconStyles.FloatingIcon__Secondary
                }
            >
                {icon}
            </BoxComponent>
        </BoxComponent>
    )
}

export default FloatingIcon
