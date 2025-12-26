import { BoxComponent } from 'lora-ds';
import { Hero, Navbar } from '../../components';
import { ThemeWrapper } from '../../wrappers';

export default function Home() {
    return (
        <ThemeWrapper>
            <BoxComponent>
                <Navbar />
                <Hero />
            </BoxComponent >
        </ThemeWrapper>
    );
}
