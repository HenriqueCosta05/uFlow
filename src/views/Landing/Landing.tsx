import { BoxComponent } from 'lora-ds'
import { Footer, Hero, Integrations, Navbar, Services } from '../../components'
import { ThemeWrapper } from '../../wrappers'

export default function Home() {
    return (
        <ThemeWrapper>
            <BoxComponent>
                <Navbar />
                <Hero />
                <Integrations />
                <Services />
                <Footer />
            </BoxComponent>
        </ThemeWrapper>
    )
}
