import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import HowWorks from '../../Components/HowItWorks/HowItWorks';
import Partners from '../../Components/Partners-Section/Partners-section';

function MainPage() {
    return(
        <section>
            <Header/>
            <Hero/>
            <Partners/>
            <HowWorks />
        </section>
    )
}

export default MainPage;